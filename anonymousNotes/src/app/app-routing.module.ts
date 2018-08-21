import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NotesNewComponent } from './notes-new/notes-new.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: AppComponent
  },
  {
    path: "new",
    component: NotesNewComponent
  },
  {
    path: "list",
    component: NotesListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
