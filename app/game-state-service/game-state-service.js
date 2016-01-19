System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, core_2;
    var GameStateService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            }],
        execute: function() {
            GameStateService = (function () {
                function GameStateService() {
                    this.gameStarted = new core_2.EventEmitter();
                    this.gameName = new core_2.EventEmitter();
                }
                GameStateService.prototype.startGame = function (name) {
                    console.log("Game starting: " + name);
                    if (!name) {
                        return;
                    }
                    this.gameStarted.next(true);
                    this.gameName.next(name);
                };
                GameStateService = __decorate([
                    core_1.Component({
                        outputs: ['gameName']
                    }), 
                    __metadata('design:paramtypes', [])
                ], GameStateService);
                return GameStateService;
            })();
            exports_1("GameStateService", GameStateService);
        }
    }
});
//# sourceMappingURL=game-state-service.js.map