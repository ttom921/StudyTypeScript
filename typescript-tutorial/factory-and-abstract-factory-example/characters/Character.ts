import { Equipment } from './../equipments/Equipment';
import { Attack } from "../abilities/Attack";
import { Armour } from "../armours/Armour";
import { Weapon } from "../weapons/Weapon";
import { Role } from "./Role";


export class Character {

    constructor(
        public readonly name: string,
        public readonly role: Role,
        //負責連結Weapon與Armour的成員
        private weaponRef: Weapon,
        private armourRef: Armour,
    ) {

    }
    public introduce() {
        console.log(`
        Hi, I'm ${this.name} the ${this.role}!
        `);
    }

    //equip 方法負責幫角色裝備武器

    public equip(equipment: Equipment) {
        const { availableRoles: roles } = equipment;
        // 確譇武器是否態夠被裝備
        if (
            roles.length === 0 ||
            roles.indexOf(this.role) !== -1
        ) {
            //確認裝備類型：使用Type Guard
            if (equipment instanceof Weapon) {
                this.weaponRef = equipment;
            } else if (equipment instanceof Armour) {
                this.armourRef = equipment;
            }
        } else {
            //不能裝備武器就丟出例外處理
            throw new Error(`${this.role} cannot equip ${equipment.name}!`);
        }
    }
    // 藉由weaponRef參考點呼叫attack方法
    public attack(target: Character) {

        this.weaponRef.attack(this, target);
    }

};