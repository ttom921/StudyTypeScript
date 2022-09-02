import { BasicWand } from './../weapons/BasicWand';
import { MagicAttack } from './../abilities/MagicAttack';
import { Character } from './Character';
import { Role } from './Role';
export class Warlock extends Character {
    constructor(name: string) {
        super(
            name,
            Role.Warlock,
            //選擇初始化的武器!
            new BasicWand()
        );
    }
    // public attack(target: Character): void {
    //     console.log(`${this.name} casts magic and pierced through ${target.name}`!);
    // }
};