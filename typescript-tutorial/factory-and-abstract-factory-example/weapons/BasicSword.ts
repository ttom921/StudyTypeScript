import { Role } from '../characters/Role';
import { MeleeAttack } from './../abilities/MeleeAttack';
import { Weapon } from './Weapon';

export class BasicSword extends Weapon {
    public readonly name = 'Basic Sword';

    // 可以被 Swordsman或Highwayman使用
    public availableRoles = [
        Role.Swordsman,
        Role.Highwayman,
    ];

    // 為連超Attack策略的參考點
    public attackStrategy = new MeleeAttack();

    // switchAttackStrategy與attack方法由父類提供


}