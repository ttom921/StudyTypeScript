import { Armour } from "../armours/Armour";
import { Weapon } from "../weapons/Weapon";



//每一種裝備的工廠必須符合 EquipmentFactory的規格
export interface EquipmentFactory {
    createWeapon(): Weapon;
    createArmour(): Armour;
}