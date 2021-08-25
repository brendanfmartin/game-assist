import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { GamesComponent } from './games.component';
import { AddComponent } from './add/add.component';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    GamesComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    GamesRoutingModule,
    MatButtonModule,
    MatListModule,
    MatIconModule
  ]
})
export class GamesModule { }
