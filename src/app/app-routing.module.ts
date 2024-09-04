import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardCollectionComponent } from './board-collection/board-collection.component';
import { BoardComponent } from './board/board.component';

const routes: Routes = [
  {"path": "", "component": BoardCollectionComponent},
  {"path": "board/:id", "component": BoardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
