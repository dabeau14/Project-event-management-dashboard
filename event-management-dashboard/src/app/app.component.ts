import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js'; // Ensure zone.js is included
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true, // Standalone component
  imports: [RouterModule, CommonModule], // CommonModule and RouterModule are used
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'event-management-dashboard';
}

// Bootstrapping the standalone component
bootstrapApplication(AppComponent, {
  providers: [provideHttpClient()],
});
