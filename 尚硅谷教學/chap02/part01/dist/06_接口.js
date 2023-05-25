"use strict";
(function () {
    const obj = {
        name: "terry",
        age: 14,
        gender: "male",
    };
    /**
     *  定義類時，可以使類報實現一個接口，
     *    實現接口就是使類滿足接口的要求
     */
    class Myclass {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log("大家好");
        }
    }
})();
