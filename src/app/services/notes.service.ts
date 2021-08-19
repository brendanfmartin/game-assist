import { Injectable } from '@angular/core';
import { INote } from '../models/note';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  private readonly noteKey = 'notes';

  constructor() { }

  getNotes(): any {
    return JSON.parse(localStorage.getItem(this.noteKey) ?? '[]');
  }

  getNote(id: number): INote {
    const notes: INote[] = this.getNotes()
    return notes.filter((note) => note.id === id)[0];
  }

  setNote(note: string): void {
    const id = this.getIndex() + 1;
    const newNote: INote = {
      id,
      note,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }
    const notes = this.getNotes();
    notes.push(newNote);
    this.saveAllNotes(notes);
  }

  deleteNote(id: number): void {
    const notes: INote[] = this.getNotes();
    notes.splice(id, id + 1);
    this.saveAllNotes(notes);
  }

  private getIndex(): number {
    const notes: INote[] = this.getNotes()
    if (notes.length) {
      let max = 0;
      notes.forEach((note) => note.id > max ? max = note.id : max);
      return max;
    } else {
      return -1;
    }
  }

  private saveAllNotes(notes: INote[]): void {
    localStorage.setItem(this.noteKey, JSON.stringify(notes));
  }
}
