(function () {

    //Animal
    class Animal {
        name: string;
        age: number;
        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }
        sayHello() {
            console.log("動物在叫....");
        }
    }

    /**
     * Dog extends Animal
     *   - 此時Animal被稱為父類,Dog被稱為子類
     *   - 使用繼承,子類將會擁有父類所有的方法和屬性
     *   - 通過繼承可以將多個類中共有的代碼寫在一個父類中，
     *     這樣只需要寫一次即可讓所有的子類同時擁有父類中的屬性和方法
     *     如果希望在子類中添加一些父類中沒有的方法或屬性時，直加在子類即可
     *   - 如果在子類中添加了和父親相同的方法，則子類方法會覆蓋掉父類的方法
     *     這樣子類別蓋掉父類方法的形式，我們稱為方法重寫
     */
    //定義一個表示狗的類
    //使Dog繼承Animal類
    class Dog extends Animal {

        sayHello() {
            console.log("汪汪汪");
        }
        run() {
            console.log(`${this.name}在跑`);
        }
    }


    //定義一個表示貓的類
    //使Cat繼承Animal類
    class Cat extends Animal {

        sayHello() {
            console.log("喵喵喵");
        }
    }


    const dog = new Dog("小白", 5);
    const cat = new Cat("小黑", 3);
    console.log(dog);
    dog.sayHello();
    dog.run();
    console.log(cat);
    cat.sayHello();

})();