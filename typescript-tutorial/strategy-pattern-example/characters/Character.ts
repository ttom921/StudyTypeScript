import { Attack } from "../abilities/Attack";
import { Role } from "./Role";


export class Character {
    constructor(
        public readonly name: string,
        public readonly role: Role,
        //新增一針對 Attack 功能的參考成員
        private attackRef: Attack,
    ) { }
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

};