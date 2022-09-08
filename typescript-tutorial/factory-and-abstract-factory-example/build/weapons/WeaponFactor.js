"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeaponFactory = void 0;
const Weapons_1 = require("./Weapons");
//各種不同的武器
const BasicSword_1 = require("./BasicSword");
const BasicWand_1 = require("./BasicWand");
const Dagger_1 = require("./Dagger");
//負責建構武器的工廠
class WeaponFactory {
    createWeapon(type) {
        switch (type) {
            case Weapons_1.Weapons.BasicSword: return new BasicSword_1.BasicSword();
            case Weapons_1.Weapons.BasicWand: return new BasicWand_1.BasicWand();
            case Weapons_1.Weapons.Dagger: return new Dagger_1.Dagger();
            //更多不同的武器可以再進行擴充
            default:
                throw new Error(`${Weapons_1.Weapons[type]} isn't registered!`);
        }
    }
}
exports.WeaponFactory = WeaponFactory;
