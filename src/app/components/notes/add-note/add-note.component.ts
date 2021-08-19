import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { NotesService } from '../../../services/notes.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {

  addNoteForm: FormGroup = this.formBuilder.group({note: ''});

  constructor(private notesService: NotesService,
              private formBuilder: FormBuilder,
              private router: Router,
              private location: Location) { }

  ngOnInit(): void {}

  addNote(): void {
    const note = this.addNoteForm.getRawValue().note;
    if (note) {
      this.notesService.setNote(note);
      this.router.navigateByUrl('/notes');
    }
  }

  cancel(): void {
    this.location.back();
  }

}
