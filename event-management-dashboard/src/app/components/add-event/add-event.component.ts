import { Component } from '@angular/core';
import { EventService } from '../services/event.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-event',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent {
deleteEvent() {
throw new Error('Method not implemented.');
}
  addEventForm: FormGroup;
eventTypes: any;
event: any;

  constructor(private eventService: EventService, private router: Router) {
    // Initialize the form with FormControls
    this.addEventForm = new FormGroup({
      name: new FormControl('', Validators.required), // Form field with validation
      date: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
    });
  }

  // Method to handle form submission
  onSubmit() {
    if (this.addEventForm.valid) {
      // Call the service to add the event if form is valid
      this.eventService.addEvent(this.addEventForm.value).subscribe(() => {
        // Navigate back to the events list after successful addition
        this.router.navigate(['/events']);
      } ,
      (error) => {
        console.error('Error adding event:', error);
        // Handle error (e.g., show a notification)
      }
    );
  }
}
}