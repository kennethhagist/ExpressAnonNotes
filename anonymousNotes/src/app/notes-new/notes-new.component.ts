import { NoteService } from '../note.service';
import { Note } from '../note';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes-new',
  templateUrl: './notes-new.component.html',
  styleUrls: ['./notes-new.component.css']
})
export class NotesNewComponent implements OnInit {

  note: Note = new Note();

  constructor(private _noteService: NoteService) { }

  onSubmit(note) {
    // event.preventDefault();
    // this.note.content = form.value.note

    this._noteService.createNote(this.note)
      // .then(note => {
      //   console.log(note);
      // });
    this.note = new Note();
  }

  ngOnInit() {

  }

}
