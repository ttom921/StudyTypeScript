"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicSword = void 0;
const Role_1 = require("../characters/Role");
const MeleeAttack_1 = require("./../abilities/MeleeAttack");
const Weapon_1 = require("./Weapon");
class BasicSword extends Weapon_1.Weapon {
    constructor() {
        super(...arguments);
        this.name = 'Basic Sword';
        // 可以被 Swordsman或Highwayman使用
        this.availableRoles = [
            Role_1.Role.Swordsman,
            Role_1.Role.Highwayman,
        ];
        // 為連超Attack策略的參考點
        this.attackStrategy = new MeleeAttack_1.MeleeAttack();
        // switchAttackStrategy與attack方法由父類提供
    }
}
exports.BasicSword = BasicSword;
