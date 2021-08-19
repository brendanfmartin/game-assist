import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { NotesService } from '../../../services/notes.service';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit {

  editNoteForm: FormGroup = this.formBuilder.group({});
  noteId: number | undefined;

  constructor(private notesService: NotesService,
              private activatedRoute: ActivatedRoute,
              private formBuilder: FormBuilder,
              private router: Router,
              private location: Location) { }

  ngOnInit(): void {
    this.noteId = parseInt(this.activatedRoute.snapshot.params['noteId']);
    const note = this.notesService.getNote(this.noteId);
    this.editNoteForm.addControl('note', new FormControl(note.note, [Validators.required]))
  }

  updateNote(): void {
    const noteText = this.editNoteForm.getRawValue().note;
    if (this.noteId !== undefined) {
      this.notesService.updateNote(this.noteId, noteText);
      this.router.navigateByUrl('/notes');
    }
  }

  cancel(): void {
    this.location.back();
  }

}
