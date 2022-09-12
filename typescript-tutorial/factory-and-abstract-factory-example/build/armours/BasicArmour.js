"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicArmour = void 0;
const Role_1 = require("../characters/Role");
const Armour_1 = require("./Armour");
class BasicArmour extends Armour_1.Armour {
    constructor() {
        super(...arguments);
        this.name = 'Basic Armour';
        this.availableRoles = [
            Role_1.Role.Swordsman,
            Role_1.Role.BountyHunter,
        ];
    }
}
exports.BasicArmour = BasicArmour;
