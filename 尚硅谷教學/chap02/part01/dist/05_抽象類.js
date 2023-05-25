"use strict";
(function () {
    /**
     *  以abstract開頭的類是抽象類，
     *   抽象類和其它類區別不大，只是不能用來創建對象
     *   抽象類就是專門用來被繼承的類
     *   抽象類中可以添加抽象方法
     */
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }
    class Dog extends Animal {
        sayHello() {
            console.log("汪汪汪...");
        }
    }
    const dog = new Dog("小白");
    dog.sayHello();
})();
