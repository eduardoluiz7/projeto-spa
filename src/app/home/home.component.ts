import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { NotesService } from '../shared/services/notes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  registro = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    date: new FormControl('')
  });

  constructor(private noteService: NotesService) { }

  ngOnInit(): void {
  }

  submit(){
    this.noteService.addNote({
      title: this.registro.get('title')?.value,
      description: this.registro.get('description')?.value,
      date: this.registro.get('date')?.value
    })
    alert("Nota salva!")
    this.reiniciarForm();

  }

  reiniciarForm(){
    this.registro.reset();
  }
}
