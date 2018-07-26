import { Injectable } from '@angular/core';
import { Note } from './note';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class NoteService {

  private base = "api/notes";

  constructor(private http: Http) { }

  retrieveAll() {
    return this.http.get(this.base)
      .map(response => response.json()).toPromise();
  }

  createNote(note: Note) {
    return this.http.post(this.base, note)
      .map(response => response.json()).toPromise();
  }

}
