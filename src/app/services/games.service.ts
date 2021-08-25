import { Injectable } from '@angular/core';
import { IGame } from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  private readonly gameKey = 'games';

  constructor() { }

  getGames(): any {
    return JSON.parse(localStorage.getItem(this.gameKey) ?? '[]');
  }

  getGame(id: number): IGame {
    const games: IGame[] = this.getGames()
    return games.filter((game) => game.id === id)[0];
  }

  setGame(title: string): void {
    const id = this.getIndex() + 1;
    const newGame: IGame = {
      id,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      title
    }
    const games = this.getGames();
    games.push(newGame);
    this.saveAllgames(games);
  }

  deleteGame(id: number): void {
    const games: IGame[] = this.getGames();
    const newGames: IGame[] = []
    games.forEach((game: IGame) => {
      if (game.id !== id) {
        newGames.push(game);
      }
    });
    this.saveAllgames(newGames);
  }

  updateGame(id: number, game: string): void {
    const { created_at } = this.getGame(id);
    this.deleteGame(id);
    const games = this.getGames();
    const newGame = { created_at, id, updated_at: new Date().toISOString(), game };
    games.push(newGame);
    this.saveAllgames(games);
  }

  private getIndex(): number {
    const games: IGame[] = this.getGames()
    if (games.length) {
      let max = 0;
      games.forEach((game) => game.id > max ? max = game.id : max);
      return max;
    } else {
      return -1;
    }
  }

  private saveAllgames(games: IGame[]): void {
    localStorage.setItem(this.gameKey, JSON.stringify(games));
  }
}
