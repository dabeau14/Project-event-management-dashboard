import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router'; // For navigation
import { EventService } from '../services/event.service'; // Import your EventService
import { Event } from '../models/event.model'; // Import your Event model

@Component({
  selector: 'app-event-list',
  standalone: true, // Standalone component
  imports: [CommonModule, RouterModule], // Import necessary modules
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
})
export class EventListComponent implements OnInit {
  events: Event[] = []; // Array to hold events

  constructor(
    private eventService: EventService,
    private router: Router // To navigate to event details or edit pages
  ) {}

  ngOnInit(): void {
    this.getEvents(); // Fetch events on component initialization
  }

  getEvents(): void {
    this.eventService.getEvents().subscribe((events: Event[]) => {
      this.events = events; // Assign fetched events to the `events` array
    });
  }

  viewEventDetails(id: number): void {
    this.router.navigate([`/event-details/${id}`]);
  }

  editEvent(id: number): void {
    this.router.navigate([`/edit-event/${id}`]);
  }

  deleteEvent(id: number): void {
    this.eventService.deleteEvent(id).subscribe(() => {
      // Remove the deleted event from the list
      this.events = this.events.filter(event => event.id !== id);
    });
  }
}
