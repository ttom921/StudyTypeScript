"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Warlock = void 0;
const MagicAttack_1 = require("./../abilities/MagicAttack");
const Character_1 = require("./Character");
const Role_1 = require("./Role");
class Warlock extends Character_1.Character {
    constructor(name) {
        super(name, Role_1.Role.Warlock, 
        //選擇功擊的策略!
        new MagicAttack_1.MagicAttack());
    }
}
exports.Warlock = Warlock;
;
