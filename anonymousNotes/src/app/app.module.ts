import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NoteService } from './note.service';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NotesNewComponent } from './notes-new/notes-new.component';


@NgModule({
  declarations: [
    AppComponent,
    NotesListComponent,
    NotesNewComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
