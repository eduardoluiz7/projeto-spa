import { Injectable } from '@angular/core';
import { Note } from '../models/note.model';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  notes: Note[]=[{title: "Aula de Cálculo", description: "Estudar integrais e derivadas", date: "20/10/2020"}, 
  {title: "Aula de Programação", description: "Fazer projeto em Java e ver anotações das aulsa", date: "20/10/2020"}];

  constructor() { }

  getNotes(): Note[]{
    return this.notes;
  }

  addNote(note: Note){
    this.notes = [...this.notes, note];
  }
}
