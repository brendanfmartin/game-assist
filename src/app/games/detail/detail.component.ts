import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../services/games.service';
import { IGame } from '../../models/game';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  game: IGame | undefined;

  constructor(private gamesService: GamesService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const gameId = this.activatedRoute.snapshot.params['gameId']
    this.game = this.gamesService.getGame(parseInt(gameId));
  }

}
