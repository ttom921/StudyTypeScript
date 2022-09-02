import { MeleeAttack } from './../abilities/MeleeAttack';
import { Character } from './Character';
import { Role } from './Role';

export class Swordsman extends Character {
    constructor(name: string) {
        super(
            name,
            Role.Swordsman,
            //選擇功擊的策略!
            new MeleeAttack()
        );
    }
};