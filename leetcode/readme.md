# JavaScript數據結構與算法
資料夾是leecode
## 環境建立

因為是資料結構和算法，所以不需要畫面來顯示
https://titangene.github.io/article/jest-typescript.html

```
npm init -y
```
安裝 TypeScript
```
npm i -D typescript
```
安裝與 Node.js 和 TypeScript 相關的環境
```
npm install -D ts-node nodemon @types/node
```

安裝與 Jest 和 TS 相關的環境
```
npm install -D jest 
npm install -D ts-jest 
npm install -D @types/jest
```

設定 package.json
```
{
  "scripts": {
    "start": "ts-node code/main.ts",
    "dev": "nodemon --watch 'code/**/*.ts' --exec ts-node code/main.ts",
    "build": "tsc",
    "test": "jest --coverage"
  }
}
```
設定 jest.config.js
Jest 的預設是可以不用配置任何檔案就能執行測試，但 Jest 的預設是使用 Babel 來處理 .ts (和 .tsx ) 檔案，
而 Babel 不會對 .ts 檔案進行編譯處理，所以就不會進行型別檢查。而 ts-jest 就能幫你處理 TS 該做的這些事。

所以若要開發 TypeScript，不建議使用 Babel，建議用 tsc 來編譯 TypeScript。
```
npx ts-jest config:init
```
修改`jest.config.js`
```
module.exports = {
  coverageDirectory: "coverage",
  preset: 'ts-jest',
  testEnvironment: "node",
  testRegex: "(/tests/.*|(\\.|/)(test|spec))\\.tsx?$"
};
```
設定 tsconfig.json
```
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "outDir": "dist",
    "strict": true,
    "sourceMap": true,
    "esModuleInterop": true
  }
}
```

寫範例程式碼
//code/sum.ts
```
function sum(a: number, b: number) {
    return a + b
}
export default sum;
```

//code/main.ts
```
import sum from './sum';

console.log(sum(1, 2));
```
執行 main.ts：
```
npm run start
```

建立測試
//src/test/sum.test.ts
```
import sum from "../code/sum";

test('adds 1+2 to equal 3', () => {
    // //Arrange
    // let x: number = 1, y: number = 2;
    // let expected: number = 3;

    // //Act
    // let actual: number = sum(x, y);

    // //Assert
    // expect(actual).toBe(expected);
    expect(sum(1, 2)).toBe(3)
})
```

執行測試
```
npm run test
```

