import { BasicArmour } from './../armours/BasicArmour';

import { Weapon } from '../weapons/Weapon';
import { EquipmentFactory } from './EquipmentFactory';
import { Armour } from '../armours/Armour';
import { BasicSword } from '../weapons/BasicSword';


export class SwordsmanEquipmentFactory implements EquipmentFactory {
    public createWeapon(): Weapon {
        return new BasicSword();
    }
    public createArmour(): Armour {
        return new BasicArmour();
    }
}