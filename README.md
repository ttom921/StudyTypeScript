# StudyTypeScript
測試TypeScript
## 案例
serverbone01 建立第一版使用typescript來建立express

serverbone02 建立第一版可以連線的`server` 和`client`

serverbone04 可以動態建立`namespace`

## Day01 遠征TypeScript行前準備

目前是來參考[讓 TypeScript 成為你全端開發的 ACE！](https://ithelp.ithome.com.tw/users/20120614/ironman/2685)因為有在使用ts，但是沒有深入的了解它，所以來學習它

要先來安裝NodeJS, 我的版本是
```
node -v
v16.13.0
```
### 第一個TypeScipt專案

```
D:\Project\github\StudyTypeScript(master -> origin)
λ mkdir typescript-tutorial

D:\Project\github\StudyTypeScript(master -> origin)
λ cd typescript-tutorial\

```
所有我們在建一個名為`hello-typescript`的資料夾，並且進到該資料夾內
```
D:\Project\github\StudyTypeScript\typescript-tutorial(master -> origin)
λ mkdir hello-typescript

D:\Project\github\StudyTypeScript\typescript-tutorial(master -> origin)
λ cd hello-typescript\
```
首先，沒有安裝過 TypeScript 的話，必須先安裝它的指令工具，記得用 `-g`，因為我們要讓該指令工具可以在任何地方使用喔：

```
λ npm install -g typescript
```
如果已經下載完成的話，我們可以下達：
```
λ tsc --init
```
使用vscode來打開資料夾

可以先來建立檔名為`index.ts`,並且在裡面寫些TypeScript的程式

```typescript
const message = 'Hello World';

function say(something: string) {
    console.log(something);
}
```

接下來，在同一個檔案資料夾，我們只要簡簡單單地下達

```
PS D:\Project\github\StudyTypeScript\typescript-tutorial\hello-typescript> tsc
```

TypeScript編譯器就會幫我們自動描所有`.ts`結尾的檔案並且產生出JS檔案

可以使用NodeJS在後端執行編譯過後的JS檔案

```
λ node index.js
Hello World
```

### TypeScript VS 原生JS

假設我們再創建一個名為`_index.js`的JS檔並且填入這些程式碼：

```
const message = 'Hello World';
console.log(message.touupercase());
```

最重要是會指正錯誤在那裏，並且不讓你compiler成功
