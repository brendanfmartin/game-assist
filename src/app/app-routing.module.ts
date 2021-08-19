import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesComponent } from './components/notes/notes/notes.component';
import { AddNoteComponent } from './components/notes/add-note/add-note.component';
import { NoteComponent } from './components/notes/note/note.component';
import { EditNoteComponent } from './components/notes/edit-note/edit-note.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'notes',
    component: NotesComponent
  },
  {
    path: 'add-note',
    component: AddNoteComponent
  },
  {
    path: 'note/:noteId',
    component: NoteComponent
  },
  {
    path: 'note/edit/:noteId',
    component: EditNoteComponent
  },
  {
    path: 'home',
    component: DashboardComponent
  },
  {
    path: '**',
    component: DashboardComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
