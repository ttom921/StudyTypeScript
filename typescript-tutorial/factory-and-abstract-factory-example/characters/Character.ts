import { Attack } from "../abilities/Attack";
import { Weapon } from "../weapons/Weapon";
import { Role } from "./Role";


export class Character {

    constructor(
        public readonly name: string,
        public readonly role: Role,
        //原本attackRef的參考點被替換成weaponRef
        // 用來連結角色與武器Weapon之間的關系
        private weaponRef: Weapon
    ) {

    }
    public introduce() {
        console.log(`
        Hi, I'm ${this.name} the ${this.role}!
        `);
    }

    //equip 方法負責幫角色裝備武器
    //這個方法也可以看成switchWeaponStrategy--那是
    // 因為weapon在策略模式裡，不同武器被視為不同的策略
    public equip(weapon: Weapon) {
        const { availableRoles: roles } = weapon;
        // 確譇武器是否態夠被裝備
        if (
            roles.length === 0 ||
            roles.indexOf(this.role) !== -1
        ) {

            console.log(`${this.name} has equipped "${weapon.name}!"`);
            this.weaponRef = weapon;

        } else {
            //不能裝備武器就丟出例外處理
            throw new Error(`${this.role} cannot equip ${weapon.name}!`);
        }
    }
    // 藉由weaponRef參考點呼叫attack方法
    public attack(target: Character) {

        this.weaponRef.attack(this, target);
    }

};