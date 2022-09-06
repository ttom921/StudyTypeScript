import { MagicAttack } from './../abilities/MagicAttack';
import { Weapon } from './Weapon';
import { Role } from '../characters/Role';
import { Attack } from '../abilities/Attack';
import { Character } from '../characters/Character';

export class BasicWand extends Weapon {
    public readonly name = 'Basic Wand';

    //只能被Warlock 使用
    public availableRoles = [
        Role.Warlock
    ];
    // 為連超Attack策略的參考點
    public attackStrategy = new MagicAttack();

    /// switchAttackStrategy與attack方法由父類提供
}