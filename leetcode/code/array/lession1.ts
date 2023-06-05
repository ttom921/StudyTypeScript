export default (str: string) => {
    //建立電話號碼鍵盤映射
    let map = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    //把輸入字符串按單字符分隔變成數組234=>[2,3,4]
    let num = str.split('');
    //保存鍵盤映射後的字母內容，如 23=>['adc',def]
    let code: string[] = [];
    num.forEach(item => {
        let idx: number = parseInt(item);
        if (map[idx]) {
            code.push(map[idx])
        }
    });
    let comb = (arr: string[]) => {
        //console.log("arr=", arr);
        //臨時變量用來保存前兩個組合的結果
        let tmp = [];
        //最外層的循環是遍歷止一個元素，里層的循環是遍歷第二個元素
        for (let i = 0, il = arr[0].length; i < il; i++) {
            for (let j = 0, jl = arr[1].length; j < jl; j++) {
                tmp.push(`${arr[0][i]}${arr[1][j]}`)
            }
        }
        (arr as any).splice(0, 2, tmp);
        console.log("arr=", arr);

        if (arr.length > 1) {
            //console.log("arr=", arr);
            comb(arr);
        } else {
            return tmp;
        }
        //console.log("result arr[0]", arr[0]);
        return arr[0];
    };
    //console.log("code=", code);
    return comb(code);
}


// export default (str: any) => {
//     // 对输入做处理，如果小于1返回空（LeetCode测试用例）
//     if (str.length < 1) return []
//     // 建立电话号码键盘映射
//     let map = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
//     // 如果只给了一个按键，直接把按键内容取出来并按单个字符分组就可以了（LeetCode测试用例）
//     //if (str.length < 2) return map[str].split('')
//     // 把输入字符串按单字符分隔变成数组，234=>[2,3,4]
//     let num = str.split('')
//     // 保存键盘映射后的字母内容，如 23=>['abc','def']
//     let code: any = []
//     num.forEach((item: any) => {
//         if (map[item]) {
//             code.push(map[item])
//         }
//     })
//     let comb = (arr: any) => {
//         // 临时变量用来保存前两个组合的结果
//         let tmp = []
//         // 最外层的循环是遍历第一个元素，里层的循环是遍历第二个元素
//         for (let i = 0, il = arr[0].length; i < il; i++) {
//             for (let j = 0, jl = arr[1].length; j < jl; j++) {
//                 tmp.push(`${arr[0][i]}${arr[1][j]}`)
//             }
//         }
//         arr.splice(0, 2, tmp);
//         console.log("arr=", arr);
//         if (arr.length > 1) {

//             comb(arr)
//         } else {
//             console.log("tmp=", tmp);
//             return tmp
//         }
//         console.log("result arr[0]=", arr[0]);
//         return arr[0]
//     }
//     return comb(code)
// }
