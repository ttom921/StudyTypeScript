"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Swordsman = void 0;
const SwordsmanEquipmentFactory_1 = require("../equipments/SwordsmanEquipmentFactory");
//import { MeleeAttack } from './../abilities/MeleeAttack';
const Character_1 = require("./Character");
const Role_1 = require("./Role");
class Swordsman extends Character_1.Character {
    constructor(name) {
        let SEF = new SwordsmanEquipmentFactory_1.SwordsmanEquipmentFactory();
        super(name, Role_1.Role.Swordsman, 
        //由工廠幫我們製作武器跟防員
        SEF.createWeapon(), SEF.createArmour());
    }
}
exports.Swordsman = Swordsman;
;
