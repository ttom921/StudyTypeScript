export default (str: string) => {
    // 建立數據結構，保存數據
    let r: string[] = [];
    let a: string = "aaaaaaa";
    let b = a[0];
    //給定任意子輸入都返回第一個符合條件的子串
    let match = (str: string) => {
        let jm = str.match(/^(0+|1+)/);
        if (jm) {
            let j0: any = jm[0];
            //console.log("j0=", j0);
            let o = (j0[0] ^ 1).toString().repeat(j0.length);
            console.log(`${j0}${o}`);
            let reg = new RegExp(`^(${j0}${o})`)
            if (reg.test(str)) {
                return RegExp.$1
            } else {
                return ''
            }
        }
        //console.log("j=", j);
    }
    for (let i = 0, len = str.length - 1; i < len; i++) {
        let sub = match(str.slice(i));
        console.log("sub=", sub);
        if (sub) {
            r.push(sub)
        }
    }
    return r;

}