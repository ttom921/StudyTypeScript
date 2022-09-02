import { Role } from '../characters/Role';
import { MeleeAttack } from './../abilities/MeleeAttack';
import { Weapon } from './Weapon';

export class BasicSword implements Weapon {
    public readonly name = 'Basic Sword';

    // 基本的劍只態簡單地揮擊
    public attackStrategy = new MeleeAttack();

    // 可以被 Swordsman或Highwayman使用
    public availableRoles = [
        Role.Swordsman,
        Role.Highwayman,
    ];


}