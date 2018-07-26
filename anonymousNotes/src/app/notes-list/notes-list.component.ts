import { NoteService } from './../note.service';
import { Component, OnInit } from '@angular/core';
import { Note } from '../note';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {
  notes;

  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.noteService.retrieveAll()
      .then(
        notes => this.notes = notes
      )
  }

}
