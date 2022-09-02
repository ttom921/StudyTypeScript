"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Swordsman = void 0;
const MeleeAttack_1 = require("./../abilities/MeleeAttack");
const Character_1 = require("./Character");
const Role_1 = require("./Role");
class Swordsman extends Character_1.Character {
    constructor(name) {
        super(name, Role_1.Role.Swordsman, 
        //選擇功擊的策略!
        new MeleeAttack_1.MeleeAttack());
    }
}
exports.Swordsman = Swordsman;
;
