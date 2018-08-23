import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NotesNewComponent } from './notes-new/notes-new.component';

const routes: Routes = [
  {
    path: "",
    component: NotesListComponent
  },
  {
    path: "new",
    component: NotesNewComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
