import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesComponent } from './notes/notes.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { NoteComponent } from './note/note.component';
import { EditNoteComponent } from './edit-note/edit-note.component';

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
  { path: 'games', loadChildren: () => import('./games/games.module').then(m => m.GamesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
