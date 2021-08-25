import { Component, OnInit } from '@angular/core';
import { IGame } from '../../models/game';
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  games: IGame[] = [];

  constructor(private gameService: GamesService) { }

  ngOnInit(): void {
    this.games = this.gameService.getGames();
  }

}
