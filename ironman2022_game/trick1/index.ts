console.log('--機率均等的摸彩箱--');
{
    /**將所有獎項定義在一個陣列中
     * [] 是用來定義陣列的方式
     */

    let items = [
        '光劍',
        '鐵盾',
        '貓草',
    ];

    /**取一固0到N-1的數字
     * Math.random():會得到一個介於0到1的亂數
     *               其中 0是可能得到的數字，1是不可能得到的數字
     * Math.floor(x):可以將數字x的小數以下無條件捨去
     * items.length：取得items陣列的長度
     */
    let index = Math.floor(Math.random() * items.length);
    /**陣列中在index位置的東西就是這次取得的獎項
     * console.log(string) 可以在控制台列印出提供的字串
    */
    let prize = items[index];
    console.log('你得到了一個' + prize);
}

console.log('--機率不均的摸彩箱--');
{
    /** 宣告一個獎項的類別 */
    class Item {
        constructor(public name: string, public weight: number) {

        }
    }
    /** 將所有獎項定義在一個陣列中
     * 參數就是建構子中的name(名字),以及weight(比重)
     */
    let items = [
        new Item('光劍', 3),
        new Item('鐵盾', 2),
        new Item('貓草', 5),
    ];
    /**計算整條陣列接起來的繩長
     * Array.reduce(函式：將陣列的其中一個元素加入計算,初始值)
     * 下面會有針對Array.reduce()的解說
    */
    let totalWeight = items.reduce((weightsSoFar, item) => weightsSoFar + item.weight, 0);
    console.log('比重總值=' + totalWeight);
    /**取一個不超過繩長的位置 */
    let position = Math.random() * totalWeight;
    console.log('position=', position);

    /**依位置去找Item
     * 首先宣告變數prize,等一下用來儲存position上找到的Item
     * 然後宣告我們目前找到的繩子累積了多少長度
     * 並用for迴圈從頭遍歷所有道具
     */
    let prize: Item = null!;
    let accumulaedWeight = 0;
    for (let item of items) {
        /**累積下一個獎項的繩長 */
        accumulaedWeight += item.weight;
        /**如果紊積繩長比獎項的位置大，表示這截道具綁著繩子就是答案了*/
        if (accumulaedWeight > position) {
            prize = item;
            break;
        }
    }
    console.log('你得到了一個 ' + prize.name);
    /**更改光劍的抽中率
     * 首先要找到光劍的Item
     */
    let itemToChange = items.find(item => item.name == '光劍');
    /**先看看原本的光劍抽中率 */
    console.log('原光劍比重 => ' + (itemToChange?.weight! / totalWeight));
    /**定義光劍的新抽中率為0.5，以及扣掉光劍後的總繩長T */
    let P = 0.5;
    let T = totalWeight - itemToChange?.weight!;
    /**依公式，光劍的新比動W就可以算出來*/
    let W = P / (1 - P) * T;
    itemToChange?.weight != W;
    /**別忘了最後履把新的光僉比動加回totalWeight */
    totalWeight = T + W;
    console.log('新的比重總值 =>', +totalWeight);
    console.log('新光劍比重 =>' + itemToChange?.weight);
    console.log('光劍抽中率 =>' + (itemToChange?.weight! / totalWeight));
}

