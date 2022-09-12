import { Role } from "../characters/Role";
import { Armour } from "./Armour";

export class BasicArmour extends Armour {
    public readonly name = 'Basic Armour';

    public availableRoles = [
        Role.Swordsman,
        Role.BountyHunter,
    ];
}