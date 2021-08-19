import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { GamesService } from '../../../services/games.service';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.scss']
})
export class AddGameComponent implements OnInit {

  addGameForm: FormGroup = this.formBuilder.group({title: ''});

  constructor(private gamesService: GamesService,
              private formBuilder: FormBuilder,
              private router: Router,
              private location: Location) { }

  ngOnInit(): void {
  }

  addGame(): void {
    const title = this.addGameForm.getRawValue().title;
    if (title) {
      this.gamesService.setGame(title);
      this.router.navigateByUrl('/');
    }
  }

  cancel(): void {
    this.location.back();
  }

}
