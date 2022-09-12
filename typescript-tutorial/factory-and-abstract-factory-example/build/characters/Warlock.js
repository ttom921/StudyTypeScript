"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Warlock = void 0;
const WarlockEquipmentFactory_1 = require("./../equipments/WarlockEquipmentFactory");
const Character_1 = require("./Character");
const Role_1 = require("./Role");
class Warlock extends Character_1.Character {
    constructor(name) {
        let WEF = new WarlockEquipmentFactory_1.WarlockEquipmentFactory();
        super(name, Role_1.Role.Warlock, 
        //由工廠幫我們製作武器跟防員
        WEF.createWeapon(), WEF.createArmour());
    }
}
exports.Warlock = Warlock;
;
