import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GamesService } from '../../services/games.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  addGameForm: FormGroup = this.formBuilder.group({title: ''});

  constructor(private gamesService: GamesService,
              private formBuilder: FormBuilder,
              private router: Router,
              private location: Location) { }

  ngOnInit(): void {}

  addGame(): void {
    const title = this.addGameForm.getRawValue().title;
    if (title) {
      this.gamesService.setGame(title);
      this.router.navigateByUrl('/games/list');
    }
  }

  cancel(): void {
    this.location.back();
  }
}
