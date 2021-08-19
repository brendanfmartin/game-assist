import { Component, OnInit } from '@angular/core';
import { NotesService } from '../services/notes.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {

  addNoteForm: FormGroup = this.formBuilder.group({note: ''});

  constructor(private notesService: NotesService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  addNote(): void {
    const note = this.addNoteForm.getRawValue().note;
    if (note) {
      console.log(note);
      this.notesService.setNote(note);
    }
  }

}
