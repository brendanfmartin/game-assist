import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotesComponent } from './components/notes/notes/notes.component';
import { AddNoteComponent } from './components/notes/add-note/add-note.component';
import { NoteComponent } from './components/notes/note/note.component';
import { EditNoteComponent } from './components/notes/edit-note/edit-note.component';
import { AddGameComponent } from './components/games/add-game/add-game.component';


@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    DashboardComponent,
    NotesComponent,
    AddNoteComponent,
    NoteComponent,
    EditNoteComponent,
    AddGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
