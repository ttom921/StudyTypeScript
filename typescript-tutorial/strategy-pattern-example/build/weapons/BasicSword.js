"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicSword = void 0;
const Role_1 = require("../characters/Role");
const MeleeAttack_1 = require("./../abilities/MeleeAttack");
class BasicSword {
    constructor() {
        this.name = 'Basic Sword';
        // 基本的劍只態簡單地揮擊
        this.attackStrategy = new MeleeAttack_1.MeleeAttack();
        // 可以被 Swordsman或Highwayman使用
        this.availableRoles = [
            Role_1.Role.Swordsman,
            Role_1.Role.Highwayman,
        ];
    }
}
exports.BasicSword = BasicSword;
