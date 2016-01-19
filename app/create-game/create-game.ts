import {Component} from 'angular2/core';
import { GameStateService } from '../game-state-service/game-state-service';

@Component({
    selector: 'create-game',
    templateUrl: 'app/create-game/create-game.html',
    inputs: ['name'],
    injectables: [ GameStateService ]
})

export class CreateGame {
    public name:String = '';
    private gameStarted: Boolean = false
    constructor (public gameStateService: GameStateService) {

      gameStateService.gameStarted.subscribe(started => this.gameStarted = started);
    }

    createGame() {

      this.gameStateService.startGame(this.name);
    }
}
