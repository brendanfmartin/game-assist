import { Component, OnInit } from '@angular/core';
import { IGame } from '../../models/game';
import { GamesService } from '../../services/games.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  games: IGame[] = [];

  constructor(private gamesService: GamesService,
              private router: Router) {}

  ngOnInit(): void {
    this.games = this.gamesService.getGames();
  }

  navigate(url: string): void {
    this.router.navigateByUrl('/add-game');
  }

}
