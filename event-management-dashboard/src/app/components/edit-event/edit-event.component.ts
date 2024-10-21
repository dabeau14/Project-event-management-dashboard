import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { ActivatedRoute, Router, RouterModule } from '@angular/router'; 
import { EventService } from '../services/event.service'; 
import { Event } from '../models/event.model'; 

@Component({
  selector: 'app-edit-event',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css'],
})
export class EditEventComponent implements OnInit {
  event: Event = new Event(); // Initialize with a new Event instance

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const eventId = Number(this.route.snapshot.paramMap.get('id'));
    if (eventId) {
      this.getEventDetails(eventId);
    }
  }

  getEventDetails(id: number): void {
    this.eventService.getEventById(id).subscribe((event: Event) => {
      this.event = event;
    });
  }

  onSubmit(): void {
    if (this.event) {
      // If the event has an ID, update it; otherwise, create a new event
      if (this.event.id) {
        this.eventService.updateEvent(this.event).subscribe(() => {
          this.router.navigate(['/events']);
        });
      } else {
        this.eventService.addEvent(this.event).subscribe(() => {
          this.router.navigate(['/events']);
        });
      }
    }
  }
}
