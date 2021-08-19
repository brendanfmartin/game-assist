import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotesService } from '../services/notes.service';
import { INote } from '../models/note';
import { Location } from '@angular/common';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  noteId: string | undefined;
  note: INote | undefined;

  constructor(private activatedRoute: ActivatedRoute,
              private location: Location,
              private notesService: NotesService) { }

  ngOnInit(): void {
    this.noteId = this.activatedRoute.snapshot.params['noteId'];
    if (this.noteId) {
      this.note = this.notesService.getNote(parseInt(this.noteId));
    }
  }

  back(): void {
    this.location.back();
  }

  delete(): void {
    if (this.note) {
      this.notesService.deleteNote(this.note.id);
      this.location.back();
    }
  }

}
