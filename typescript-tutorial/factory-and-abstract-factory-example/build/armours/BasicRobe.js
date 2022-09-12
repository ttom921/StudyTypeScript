"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicRobe = void 0;
const Role_1 = require("../characters/Role");
const Armour_1 = require("./Armour");
class BasicRobe extends Armour_1.Armour {
    constructor() {
        super(...arguments);
        this.name = 'Basic Armour';
        this.availableRoles = [
            Role_1.Role.Warlock,
        ];
    }
}
exports.BasicRobe = BasicRobe;
