import { StabAttack } from './abilities/StabAttack';

import { Swordsman } from "./characters/Swordsman";
import { Warlock } from "./characters/Warlock";
import { BasicSword } from "./weapons/BasicSword";
import { BasicWand } from './weapons/BasicWand';
import { Dagger } from './weapons/Dagger';


// const swordsman = new Swordsman('Maxwell');
// const warlock = new Warlock('Martin');
// //使用初始化BasicSword，其中BasicSword綁定的是MeleeAttack
// console.log('Using BasicSword - MeleeAttack:');
// swordsman.attack(warlock);

// //改變武器，使用dagger, 其中Dagger綁定的是StabAttack
// console.log('Using Dagger - StabAttack');
// swordsman.equip(new Dagger());
// swordsman.attack(warlock);

// //切探成BasicWand 會丟出例外，因為Swordsman不能使用
// try {
//     swordsman.equip(new BasicWand());
// } catch (err) {
//     console.log(err);
// }

const swordUsingStab = new BasicSword();
swordUsingStab.switchAttackStrategy(new StabAttack());

const swordsman = new Swordsman('Maxwell');
const warlock = new Warlock('Martin');
//使用初始化BasicSword，其中BasicSword綁定的是MeleeAttack
console.log('Using BasicSword - MeleeAttack:');
swordsman.attack(warlock);

//改變武器，使用綁定為StabAttack模式的BasicSword
console.log('Using Dagger - StabAttack');
swordsman.equip(swordUsingStab);
swordsman.attack(warlock);

