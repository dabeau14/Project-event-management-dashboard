import { Routes } from '@angular/router';
import { AddEventComponent } from './components/add-event/add-event.component';
import { EditEventComponent } from './components/edit-event/edit-event.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { EventListComponent } from './components/event-list/event-list.component';

export const routes: Routes = [
  { path: 'events', component: EventListComponent },
  { path: 'add-event', component: AddEventComponent },
  { path: 'edit-event/:id', component: EditEventComponent },
  { path: 'event-details/:id', component: EventDetailsComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' }
];
