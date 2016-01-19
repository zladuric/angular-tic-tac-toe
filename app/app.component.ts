import { Component } from 'angular2/core';
import { MyTitle } from './my-title/my-title';
import { CreateGame } from './create-game/create-game';
import { GameStateService } from './game-state-service/game-state-service';


@Component({
    selector: 'my-app',
    templateUrl: 'app/app.html',
    directives: [MyTitle, CreateGame],
    injectables: [ GameStateService ]
})
export class AppComponent {


    constructor (public gameStateService: GameStateService) {

      gameStateService.gameName.subscribe(name => this.gameName = name);
      gameStateService.gameStarted.subscribe(started => {


      });
    }

}
