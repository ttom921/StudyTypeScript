
import { Weapon } from '../weapons/Weapon';
import { EquipmentFactory } from './EquipmentFactory';
import { Armour } from '../armours/Armour';
import { BasicWand } from '../weapons/BasicWand';
import { BasicRobe } from '../armours/BasicRobe';


export class WarlockEquipmentFactory implements EquipmentFactory {
    public createWeapon(): Weapon {
        return new BasicWand();
    }
    public createArmour(): Armour {
        return new BasicRobe();
    }
}