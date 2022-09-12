"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Character = void 0;
const Armour_1 = require("../armours/Armour");
const Weapon_1 = require("../weapons/Weapon");
class Character {
    constructor(name, role, 
    //負責連結Weapon與Armour的成員
    weaponRef, armourRef) {
        this.name = name;
        this.role = role;
        this.weaponRef = weaponRef;
        this.armourRef = armourRef;
    }
    introduce() {
        console.log(`
        Hi, I'm ${this.name} the ${this.role}!
        `);
    }
    //equip 方法負責幫角色裝備武器
    equip(equipment) {
        const { availableRoles: roles } = equipment;
        // 確譇武器是否態夠被裝備
        if (roles.length === 0 ||
            roles.indexOf(this.role) !== -1) {
            //確認裝備類型：使用Type Guard
            if (equipment instanceof Weapon_1.Weapon) {
                this.weaponRef = equipment;
            }
            else if (equipment instanceof Armour_1.Armour) {
                this.armourRef = equipment;
            }
        }
        else {
            //不能裝備武器就丟出例外處理
            throw new Error(`${this.role} cannot equip ${equipment.name}!`);
        }
    }
    // 藉由weaponRef參考點呼叫attack方法
    attack(target) {
        this.weaponRef.attack(this, target);
    }
}
exports.Character = Character;
;
