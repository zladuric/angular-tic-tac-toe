import { Component } from 'angular2/core';
import { MyTitle } from './my-title/my-title';
import { CreateGame } from './create-game/create-game';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.html',
    directives: [MyTitle, CreateGame]
})
export class AppComponent {
    public gameName:String = 'TTT Game';
}
