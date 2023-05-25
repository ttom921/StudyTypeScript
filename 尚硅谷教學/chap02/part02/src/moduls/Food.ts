//定義食物類Food
class Food {
    //定義一個屬性表示食物所對應的元素
    element: HTMLElement;
    constructor() {
        //獲取頁面中的food元素並將其賦值給element
        this.element = document.getElementById('food')!;
    }
    //定欺一個獲取食物X軸坐標的方法
    get X() {
        return this.element.offsetLeft;
    }
    //定義一個獲取食Y軸坐標的方法
    get Y() {
        return this.element.offsetTop;
    }
    //修改食物的位置
    change() {
        //生成一個隨機的位置
        //食物的位置最小是0 最大是290（300-10）
        //蛇移動一次就是一格，一格的大小就是10，所以就要求食物的坐標必須是整10

        let top = Math.round(Math.random() * 29) * 10;
        let left = Math.round(Math.random() * 29) * 10;

        this.element.style.left = left + 'px';
        this.element.style.top = top + 'px';
    }
}

// //測試代碼
// const food = new Food();
// console.log(food.X, food.Y);
// food.change();
// console.log(food.X, food.Y);

export default Food;