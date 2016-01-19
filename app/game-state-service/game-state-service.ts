import {Component} from 'angular2/core';

import {EventEmitter} from 'angular2/core';

@Component({

  outputs: ['gameName']
})
export class GameStateService {

  public gameStarted: EventEmitter = new EventEmitter();
  public gameName: EventEmitter = new EventEmitter();
  constructor () {


  }

  startGame(name) {

    console.log(`Game starting: ${name}`);

    if (!name) {

      return;
    }
    this.gameStarted.next(true);
    this.gameName.next(name);
  }
}