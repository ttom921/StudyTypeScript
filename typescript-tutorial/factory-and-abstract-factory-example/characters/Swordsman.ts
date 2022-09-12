import { SwordsmanEquipmentFactory } from '../equipments/SwordsmanEquipmentFactory';
import { BasicSword } from './../weapons/BasicSword';
//import { MeleeAttack } from './../abilities/MeleeAttack';
import { Character } from './Character';
import { Role } from './Role';

export class Swordsman extends Character {
    constructor(name: string) {
        let SEF = new SwordsmanEquipmentFactory();
        super(
            name,
            Role.Swordsman,
            //由工廠幫我們製倫武器跟防員
            SEF.createWeapon(),
            SEF.createArmour()
        );
    }
};