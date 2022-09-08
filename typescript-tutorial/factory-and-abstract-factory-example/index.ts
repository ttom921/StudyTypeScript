//#region 測試一

import { Swordsman } from "./characters/Swordsman";
import { Warlock } from "./characters/Warlock";

// 武器的載入根本不需要了
// import { BasicSword } from "./weapons/BasicSword";
// import { BasicWand } from './weapons/BasicWand';
// import { Dagger } from './weapons/Dagger';

// 只需要載入工廠以及武列表
import { Weapons } from "./weapons/Weapons";
import { WeaponFactory } from './weapons/WeaponFactor';

let swordsman = new Swordsman('Maxwell');
let warlock = new Warlock('Martin');

//建立武器的工廠
const weaponFactory = new WeaponFactory();

//使用 Swordsman 預設的武器BasicSword 進行攻擊
console.log(`Using BasicSword - MeleeAttack`);
swordsman.attack(warlock);

//建立Dagge並更換武器
const dagger = weaponFactory.createWeapon(Weapons.Dagger);
swordsman.equip(dagger);

//使用Dagger 進行攻擊
console.log(`Using Dagger - StabAttack:`);
swordsman.attack(warlock);

//#endregion 測試一


// const swordUsingStab = new BasicSword();
// swordUsingStab.switchAttackStrategy(new StabAttack());

// const swordsman = new Swordsman('Maxwell');
// const warlock = new Warlock('Martin');
// //使用初始化BasicSword，其中BasicSword綁定的是MeleeAttack
// console.log('Using BasicSword - MeleeAttack:');
// swordsman.attack(warlock);

// //改變武器，使用綁定為StabAttack模式的BasicSword
// console.log('Using Dagger - StabAttack');
// swordsman.equip(swordUsingStab);
// swordsman.attack(warlock);

