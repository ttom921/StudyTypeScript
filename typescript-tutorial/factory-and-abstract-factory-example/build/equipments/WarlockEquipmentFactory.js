"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarlockEquipmentFactory = void 0;
const BasicWand_1 = require("../weapons/BasicWand");
const BasicRobe_1 = require("../armours/BasicRobe");
class WarlockEquipmentFactory {
    createWeapon() {
        return new BasicWand_1.BasicWand();
    }
    createArmour() {
        return new BasicRobe_1.BasicRobe();
    }
}
exports.WarlockEquipmentFactory = WarlockEquipmentFactory;
