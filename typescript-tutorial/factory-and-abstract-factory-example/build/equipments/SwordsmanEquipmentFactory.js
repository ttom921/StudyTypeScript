"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwordsmanEquipmentFactory = void 0;
const BasicArmour_1 = require("./../armours/BasicArmour");
const BasicSword_1 = require("../weapons/BasicSword");
class SwordsmanEquipmentFactory {
    createWeapon() {
        return new BasicSword_1.BasicSword();
    }
    createArmour() {
        return new BasicArmour_1.BasicArmour();
    }
}
exports.SwordsmanEquipmentFactory = SwordsmanEquipmentFactory;
