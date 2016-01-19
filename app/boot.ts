import {bootstrap} from 'angular2/platform/browser'
import {AppComponent} from './app.component'
import { GameStateService } from 'app/game-state-service/game-state-service'

bootstrap(AppComponent, [ GameStateService]);
