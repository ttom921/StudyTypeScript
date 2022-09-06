"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dagger = void 0;
const StabAttack_1 = require("./../abilities/StabAttack");
const Weapon_1 = require("./Weapon");
class Dagger extends Weapon_1.Weapon {
    constructor() {
        super(...arguments);
        this.name = 'Dagger';
        // 匕首可以進行刺擊的動作
        this.attackStrategy = new StabAttack_1.StabAttack();
        //任何職業都可以進行刺擊，在此留為空陣列
        this.availableRoles = [];
        /// switchAttackStrategy與attack方法由父類提供
    }
}
exports.Dagger = Dagger;
