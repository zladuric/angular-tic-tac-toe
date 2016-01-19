import {Component} from 'angular2/core';

@Component({
    selector: 'create-game',
    templateUrl: 'app/create-game/create-game.html',
    inputs: ['name']
})

export class CreateGame {
    public name:String = '';
}
