(function () {

    //描述一個對象的類型
    type myType = {
        name: string,
        age: number,
    };
    /*
        接口用來定義一個類結構，用來定義一個類中應該包含哪些屬性和方法
          同時接口也可以當成類型聲明去使用  
    */
    interface myInterface {
        name: string;
        age: number;
    }
    interface myInterface {
        gender: string;
    }

    const obj: myInterface = {
        name: "terry",
        age: 14,
        gender: "male",
    };

    /** 
     * 接口可以在定義類的時候去限制類的結構
     *   接口中的所有屬性都不能有實際的值
     *   接口只定義對象的結構，而不考慮實際值
     *     在接口中所有的方法都是抽象方法
    */
    interface myInter {
        name: string;
        sayHello(): void;
    }

    /**
     *  定義類時，可以使類報實現一個接口，
     *    實現接口就是使類滿足接口的要求
     */
    class Myclass implements myInter {
        name: string;
        constructor(name: string) {
            this.name = name;
        }
        sayHello(): void {
            console.log("大家好")
        }

    }
})();