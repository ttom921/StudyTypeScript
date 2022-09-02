import { MagicAttack } from './../abilities/MagicAttack';
import { Weapon } from './Weapon';
import { Role } from '../characters/Role';

export class BasicWand implements Weapon {
    public readonly name = 'Basic Wand';

    // 基本的劍只態簡單地揮擊
    public attackStrategy = new MagicAttack();

    //只能被Warlock 使用
    public availableRoles = [
        Role.Warlock
    ];
}