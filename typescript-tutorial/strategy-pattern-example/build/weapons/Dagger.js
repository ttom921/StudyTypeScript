"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dagger = void 0;
const StabAttack_1 = require("./../abilities/StabAttack");
class Dagger {
    constructor() {
        this.name = 'Dagger';
        // 匕首可以進行刺擊的動作
        this.attackStrategy = new StabAttack_1.StabAttack();
        //任何職業都可以進行刺擊，在此留為空陣列
        this.availableRoles = [];
    }
}
exports.Dagger = Dagger;
