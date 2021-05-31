import { Component, OnInit } from '@angular/core';
import { Note } from '../shared/models/note.model';
import { NotesService } from '../shared/services/notes.service';

@Component({
  selector: 'app-my-notes',
  templateUrl: './my-notes.component.html',
  styleUrls: ['./my-notes.component.css']
})
export class MyNotesComponent implements OnInit {

  notes: Note[] = [];

  constructor(private notesService: NotesService) { }

  ngOnInit(): void {
    this.notes = this.notesService.getNotes();
  }

}
