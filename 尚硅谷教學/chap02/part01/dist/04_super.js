"use strict";
(function () {
    class Animal {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log("動物在叫～～");
        }
    }
    class Dog extends Animal {
        constructor(name, age) {
            super(name);
            this.age = age;
        }
        sayHello() {
            //在類的方法中，super就表示當前類的父類
            super.sayHello();
        }
    }
    const dog = new Dog("小白", 3);
    dog.sayHello();
})();
