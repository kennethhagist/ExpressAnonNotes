import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import 'rxjs';
import { BehaviorSubject } from 'rxjs';
// import { Observable } from 'rxjs/Observable';
// import { Note } from './note';

@Injectable()
export class NoteService {
  notes: Array<object> = [];
  noteObserver = new BehaviorSubject(this.notes)

  constructor(private _http: Http) { }

  retrieveAll() {
    this._http.get("/notes").subscribe( res => {
      this.notes = res.json();
      this.noteObserver.next(this.notes);
    }, (err) => {
      console.log(err);
    })

  }

  createNote(note) {
    this._http.post("/notes", note).subscribe( res => {
      this.notes = res.json();
      this.noteObserver.next(this.notes);
    }, (err) => {
      console.log(err);
    })

  }

}
