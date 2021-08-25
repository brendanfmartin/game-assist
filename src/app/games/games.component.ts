import { Component, OnInit } from '@angular/core';
import { GamesService } from '../services/games.service';
import { IGame } from '../models/game';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  games: IGame[] = [];

  constructor(private gameService: GamesService) { }

  ngOnInit(): void {
    this.games = this.gameService.getGames();
  }

}
