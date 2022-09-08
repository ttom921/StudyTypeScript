"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Weapon = void 0;
//將原本介面的Weapon晉升障抽象類別後，使用absract class
class Weapon {
    //武器可以更改攻擊的策略
    switchAttackStrategy(type) {
        this.attackStrategy = type;
    }
    //藉由attackStrategy 參考點呼叫attack方法
    // 由於本類別不是Character, 因此必須傳遞兩個分別代表主角
    /// 本身以及被功擊對象Character物件來實現攻擊的功能
    attack(self, target) {
        this.attackStrategy.attack(self, target);
    }
}
exports.Weapon = Weapon;