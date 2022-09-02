import { BasicWand } from './weapons/BasicWand';
import { Dagger } from './weapons/Dagger';
import { StabAttack } from './abilities/StabAttack';
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


// const swordsman = new Swordsman('Maxwell');
// const warlock = new Warlock('Martin');

// console.log('swordsman attacking the warlock: ');
// swordsman.attack(warlock);

// console.log('warlock attacking the swordsman: ');
// warlock.attack(swordsman);

// const swordsman = new Swordsman('Maxwell');
// const warlock = new Warlock('Martin');
// //Using Default: MeleeAttack
// console.log('Using MeleeAttack:');
// swordsman.attack(warlock);

// //switch to StabAttack
// swordsman.switchAttachStrategy(new StabAttack());
// // Using New Strategy: StabAttack
// console.log('Using StabAttack:');
// swordsman.attack(warlock);

const swordsman = new Swordsman('Maxwell');
const warlock = new Warlock('Martin');
//使用初始㑊時的BasicSword
console.log(`Using BasicSword-MeleeAttack:`);
swordsman.attack(warlock);

//切換成匕首Dagger
swordsman.equip(new Dagger());
console.log('Using Dagger - StabAttack');
swordsman.attack(warlock);

//切探成BasicWand 會丟出例外，因為Swordsman不能使用
try {
    swordsman.equip(new BasicWand());
} catch (err) {
    console.log(err);
}