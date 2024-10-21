import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router'; // For route params and navigation
import { EventService } from '../services/event.service'; // Your event service
import { Event } from '../models/event.model'; // Your event model

@Component({
  selector: 'app-event-details',
  standalone: true, // Standalone component
  imports: [CommonModule, RouterModule], // Import necessary modules
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css'],
})
export class EventDetailsComponent implements OnInit {
  event: Event | undefined; // Event object to hold details, initially undefined

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute // To get route parameters like event ID
  ) {}

  ngOnInit(): void {
    const eventId = Number(this.route.snapshot.paramMap.get('id')); // Get event ID from route
    this.getEventDetails(eventId); // Fetch event details on init
  }

  getEventDetails(id: number): void {
    // Fetch event details using EventService
    this.eventService.getEventById(id).subscribe((event: Event) => {
      this.event = event; // Assign fetched event details to the `event` property
    });
  }
}
