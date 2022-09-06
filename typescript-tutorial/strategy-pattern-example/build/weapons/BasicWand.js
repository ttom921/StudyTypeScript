"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicWand = void 0;
const MagicAttack_1 = require("./../abilities/MagicAttack");
const Weapon_1 = require("./Weapon");
const Role_1 = require("../characters/Role");
class BasicWand extends Weapon_1.Weapon {
    constructor() {
        super(...arguments);
        this.name = 'Basic Wand';
        //只能被Warlock 使用
        this.availableRoles = [
            Role_1.Role.Warlock
        ];
        // 為連超Attack策略的參考點
        this.attackStrategy = new MagicAttack_1.MagicAttack();
        /// switchAttackStrategy與attack方法由父類提供
    }
}
exports.BasicWand = BasicWand;
