import { WarlockEquipmentFactory } from './../equipments/WarlockEquipmentFactory';
import { BasicWand } from './../weapons/BasicWand';
import { MagicAttack } from './../abilities/MagicAttack';
import { Character } from './Character';
import { Role } from './Role';
export class Warlock extends Character {
    constructor(name: string) {
        let WEF = new WarlockEquipmentFactory();
        super(
            name,
            Role.Warlock,
            //由工廠幫我們製作武器跟防員
            WEF.createWeapon(),
            WEF.createArmour(),
        );
    }
};