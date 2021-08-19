import { Injectable } from '@angular/core';
import { INote } from '../models/note';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor() { }

  getNotes(): any {
    return JSON.parse(localStorage.getItem('notes') ?? '[]');
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
    localStorage.setItem(`notes`, JSON.stringify(notes));
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
}
