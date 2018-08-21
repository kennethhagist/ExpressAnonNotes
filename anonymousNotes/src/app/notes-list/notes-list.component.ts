import { NoteService } from '../note.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {
  notes;

  constructor(private _noteService: NoteService) {
    this._noteService.noteObserver.subscribe((notes) => {
      this.notes = notes;
    })
    this._noteService.retrieveAll()
  }

  ngOnInit() {

  }

}
