// export default (str: string) => {
//     //字符串按空格進行分隔，保存數組，數組的元素的先後順序就是單詞的順序
//     let arr = str.split(' ');
//     //對數組進行遍歷，然後每個元素進行反轉
//     let result = arr.map(item => {
//         return item.split('').reverse().join('')
//     });
//     return result.join(' ');
// }
// export default (str: string) => {
//     //字符串按空格進行分隔，保存數組，數組的元素的先後順序就是單詞的順序
//     let arr = str.split(/\s/g);
//     //對數組進行遍歷，然後每個元素進行反轉
//     let result = arr.map(item => {
//         return item.split('').reverse().join('')
//     });
//     return result.join(' ');
// }

export default (str: string) => {
    //字符串按空格進行分隔，保存數組，數組的元素的先後順序就是單詞的順序
    let arr = str.match(/[\w']+/g);
    //對數組進行遍歷，然後每個元素進行反轉
    let result = arr?.map(item => {
        return item.split('').reverse().join('')
    });
    return result?.join(' ');
}