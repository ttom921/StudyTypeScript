import { Role } from "../characters/Role";
import { Armour } from "./Armour";


export class BasicRobe extends Armour {
    public readonly name = 'Basic Armour';

    public availableRoles = [
        Role.Warlock,
    ];
}