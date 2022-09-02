import { Warlock } from './characters/Warlock';
import { Swordsman } from './characters/Swordsman';
import { Character } from './characters/Character';
import { Role } from './characters/Role';

// const swordsman = new Character('Maxwell', Role.Swordsman);
// swordsman.introduce();

// const swordsman = new Swordsman('Maxwell');
// const warlock = new Warlock('Martin');
// swordsman.introduce();
// warlock.introduce();


const swordsman = new Swordsman('Maxwell');
const warlock = new Warlock('Martin');

console.log('swordsman attacking the warlock: ');
swordsman.attack(warlock);

console.log('warlock attacking the swordsman: ');
warlock.attack(swordsman);