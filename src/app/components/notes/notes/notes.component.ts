import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { INote } from '../../../models/note';
import { NotesService } from '../../../services/notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  notes: INote[] = [];

  constructor(private notesService: NotesService,
              private router: Router) { }

  ngOnInit(): void {
    this.notes = this.notesService.getNotes();
  }

  addNote(): void {
    this.router.navigateByUrl('add-note');
  }

  goToNote(id: number): void {
    this.router.navigateByUrl(`note/${id}`);
  }

}
