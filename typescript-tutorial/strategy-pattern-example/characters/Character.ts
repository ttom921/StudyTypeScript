import { Attack } from "../abilities/Attack";
import { Weapon } from "../weapons/Weapon";
import { Role } from "./Role";


export class Character {
    //在裝備武器的同時被初始化，參見建構子函式
    private attackRef: Attack;
    constructor(
        public readonly name: string,
        public readonly role: Role,
        //不雬要再新增 attackRef,因為可以根據初始化的武器決定
        // 新增一個針對Weapon裝備的參考成員
        private weaponRef: Weapon
    ) {
        this.attackRef = this.weaponRef.attackStrategy;
    }
    public introduce() {
        console.log(`
        Hi, I'm ${this.name} the ${this.role}!
        `);
    }
    //直接屏棄原本的attack方法
    // public attack(target: Character) {
    //     console.log(`${this.name} attacks ${target.name} using the sword`);
    // }
    //將角色的攻擊能力籍由參考點連結的策略進行實現的動作
    public attack(target: Character) {
        // 別忘了，第一個參數要指定攻擊者，此時的攻擊者是自已
        // 第二個參數則是被功擊者，所以是target
        this.attackRef.attack(this, target);
    }
    // // 對攻擊的策略進行更換
    // public switchAttachStrategy(type: Attack) {
    //     this.attackRef = type;
    // }
    //角色可以裝備東西
    public equip(weapon: Weapon) {
        const { availableRoles: roles } = weapon;
        if (
            roles.length === 0 ||
            roles.indexOf(this.role) !== -1
        ) {
            // 如果角色可以裝備，則改變武器參考外
            //順便改變攻擊策略！
            console.log(`${this.name} has equipped "${weapon.name}!"`);
            this.weaponRef = weapon;
            this.attackRef = this.weaponRef.attackStrategy;
        } else {
            //不能裝備武器就丟出例外處理
            throw new Error(`${this.role} cannot equip ${weapon.name}!`);
        }
    }

};