System.register(['angular2/core', '../game-state-service/game-state-service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, game_state_service_1;
    var CreateGame;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (game_state_service_1_1) {
                game_state_service_1 = game_state_service_1_1;
            }],
        execute: function() {
            CreateGame = (function () {
                function CreateGame(gameStateService) {
                    var _this = this;
                    this.gameStateService = gameStateService;
                    this.name = '';
                    this.gameStarted = false;
                    gameStateService.gameStarted.subscribe(function (started) { return _this.gameStarted = started; });
                }
                CreateGame.prototype.createGame = function () {
                    this.gameStateService.startGame(this.name);
                };
                CreateGame = __decorate([
                    core_1.Component({
                        selector: 'create-game',
                        templateUrl: 'app/create-game/create-game.html',
                        inputs: ['name'],
                        injectables: [game_state_service_1.GameStateService]
                    }), 
                    __metadata('design:paramtypes', [game_state_service_1.GameStateService])
                ], CreateGame);
                return CreateGame;
            })();
            exports_1("CreateGame", CreateGame);
        }
    }
});
//# sourceMappingURL=create-game.js.map