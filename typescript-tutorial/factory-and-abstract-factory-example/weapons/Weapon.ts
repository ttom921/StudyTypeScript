import { Attack } from "../abilities/Attack";
import { Character } from "../characters/Character";
import { Role } from "../characters/Role";

//將原本介面的Weapon晉升障抽象類別後，使用absract class
export abstract class Weapon {
    // 裝備當然要有名稱
    abstract name: string;

    // 有些裝備會限制哪些職業的角色使用
    // 如果是空代表任何職業都可以使用
    // 這個設定當然然不是最好的設計，將就一下
    abstract availableRoles: Role[];

    // 武器的攻擊策鉻，為Weapon與Attack之間的連結
    abstract attackStrategy: Attack;

    //武器可以更改攻擊的策略
    public switchAttackStrategy(type: Attack) {
        this.attackStrategy = type;
    }

    //藉由attackStrategy 參考點呼叫attack方法
    // 由於本類別不是Character, 因此必須傳遞兩個分別代表主角
    /// 本身以及被功擊對象Character物件來實現攻擊的功能
    public attack(self: Character, target: Character) {
        this.attackStrategy.attack(self, target);
    }
}