import { NoteService } from './../note.service';
import { Note } from './../note';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes-new',
  templateUrl: './notes-new.component.html',
  styleUrls: ['./notes-new.component.css']
})
export class NotesNewComponent implements OnInit {
  note = new Note();

  constructor(private noteService: NoteService) { }

  ngOnInit() {}

  onSubmit(event: Event, form) {
    event.preventDefault();
    this.note.context = form.value.note

    this.noteService.createNote(this.note)
      .then(note => {
        console.log(note);
      });

    this.note = new Note();
  }

}
