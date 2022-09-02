"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicWand = void 0;
const MagicAttack_1 = require("./../abilities/MagicAttack");
const Role_1 = require("../characters/Role");
class BasicWand {
    constructor() {
        this.name = 'Basic Wand';
        // 基本的劍只態簡單地揮擊
        this.attackStrategy = new MagicAttack_1.MagicAttack();
        //只能被Warlock 使用
        this.availableRoles = [
            Role_1.Role.Warlock
        ];
    }
}
exports.BasicWand = BasicWand;
