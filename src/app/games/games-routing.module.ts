import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './games.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  { path: '', component: GamesComponent },
  { path: 'add', component: AddCoqmponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
