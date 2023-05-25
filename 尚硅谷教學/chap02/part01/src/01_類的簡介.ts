//使用class 關鍵字來定義一個類

/**
 *  對象中主要炰含了兩個部分：
 *    屬性
 *    方法
 */
class Person {

    /** 
     *  直接定義的屬性是實例屬性，需要通過對象的實例去訪問：
     *      const per= new Person();
     *      per.name
     *  使用static開頭的屬性是靜態屬性(類屬性),可以直接通過類來訪問
     *      Person.age
     * 
     *  readonly 開頭的屬性表示一個只讀的屬性無法修變
    */

    //定義實例屬性
    //name: string = "terry";
    name = "terry";
    //在屬性前使用static關鍵字可以定義屬性(靜態屬性)
    //static age: number = 14;
    age = 14;

    //定義方法
    /**
     *  如果方法以static開頭則方法就是類方法，可以直接通過類去調用
     */
    sayHello() {

    }
}


const per = new Person();
console.log(per);