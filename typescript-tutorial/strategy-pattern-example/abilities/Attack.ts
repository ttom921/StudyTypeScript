import { Character } from './../characters/Character';


export interface Attack {
    attack(self: Character, target: Character): void;
}