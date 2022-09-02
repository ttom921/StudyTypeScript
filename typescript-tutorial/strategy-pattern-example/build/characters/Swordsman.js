"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Swordsman = void 0;
const BasicSword_1 = require("./../weapons/BasicSword");
//import { MeleeAttack } from './../abilities/MeleeAttack';
const Character_1 = require("./Character");
const Role_1 = require("./Role");
class Swordsman extends Character_1.Character {
    constructor(name) {
        super(name, Role_1.Role.Swordsman, 
        //選擇初始化的武器!
        new BasicSword_1.BasicSword());
    }
}
exports.Swordsman = Swordsman;
;
