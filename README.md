# StudyTypeScript
測試TypeScript
## 案例
serverbone01 建立第一版使用typescript來建立express

serverbone02 建立第一版可以連線的`server` 和`client`

serverbone04 可以動態建立`namespace`

## Day01 遠征TypeScript行前準備

目前是來參考[讓 TypeScript 成為你全端開發的 ACE！](https://ithelp.ithome.com.tw/users/20120614/ironman/2685)因為有在使用ts，但是沒有深入的了解它，所以來學習它

https://github.com/Alexius-Huang/Iron-Man-Competition

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

## Day02 前線維護，型別推論X註記-Type Inference & Annotation

### 型別有哪些?

在回答型別推論與註記在TypeScript運作的機制之前，要先知道TypeScript內建定義了哪些**基礎型別(Types)**

- 原始型別Primitive Types：包含`number`,`string`,`boolean`,`undefined`,`null`,ES6介紹的`symbol`與時常會在函式型別裡看到的`void`
- 物件型別Object Types：這些型別的共同特徵是*從原始型別或物件型別組合出來的複合型態*(比如物件裡面的Key-Value個別是`string`和`number`型別組合成的)：

  - 基礎物件型別：包含JSON物件、陣列(`Array<T>`或`T[]`)，類吸以及類別產生出的物件（也就是Class以及藉由Class`new`出來的Instance）
  - TypeScrip擴充型別：即Enum與Tuple，內建在TypeScript
  - 函式型別Function Types：類似於`(input)=>(Output)`這種格式的型別
- 明文型別Literal Type：一個值本身也可以成為一個型別，比如字串`Hello world--若成為某變數的型別的話，它只能存剛好等於`"Hello world"字串值；位通常會看到的是Object Literal Type
- 特殊型別：即`any`、`never`（TS 2.0釋出）以及最新的`unknown`型別(TS3.0釋出)
- 複合型別：即`union`與`intersection`的型別組合，但是跟其它型別的差別在於：這類型的型別都是由邏輯運算子組成，分別為`|`與`&`
- 通用型別Generic Types：一種讓程式碼可以變得更加通用的絕招

建立測試程式

```
// 沒有進到 01-basic 資料夾記得：
$ cd ./01-basic

// 初始化 TS 編譯器設定檔
$ tsc --init
```

tsconfig.json 設定

將裡面的 `strictNullCheck` 選項改成 `true`

```
/* tsconfig.json */
{
  "compilerOptions": {
    /*  ...  */
    "strictNullChecks": true,
    /* ... */
  }
}
```

開始先建立好 `index.ts`

```typescript
// index.ts
let myName = 'ttom';
let ang = 20;
let hasPet = false;
let nothing = undefined;
let nothingLiterally = null;

// myName=null;
// age=true;
// hasPet="Dog";
// nothing="something";
// nothingLiterally="thisa";

// let messageToSend;
// messageToSend="cat is afraid of...";
// messageToSend=101010101001010;

// let absoluteNothing:undefined=undefined;
// let literallyAbsoluteNothing:null=null;

// absoluteNothing=123;
// literallyAbsoluteNothing="i can't live in";

// let canBeNullableString:string;
// canBeNullableString='hello';

// canBeNullableString=undefined;
// canBeNullableString=null;

let absolutelyEitherNullOrString: string | null;
absolutelyEitherNullOrString = 'assigned with string...';
absolutelyEitherNullOrString = null;
absolutelyEitherNullOrString = "assigned with string,again"
```

## Day03 前線維護，物件型別X完整性理論-Object Types Basics

基礎物件型別-JSON物件格式

結論是--只要格式正確，TypeScript都會給你通過。

#### 重點 1. 基礎物件的型別推論機制

1. JS 物件的型別會**按照物件本身的格式被推論出來**
2. 可以對物件做出的行為：

+ 對物件裡的屬性覆寫值，其**值的型別與該屬性對應的型別相同**
+ 對物件整體覆寫，其**覆寫的物件格式必須完全相同**

1. 常見會被 TS 警告的情形有以下：

+ 對物件裡的**屬性插入或覆寫錯誤的型別值**
+ **覆寫整個物件時的格式錯誤**（少一鍵 / 多一鍵 / 沒多沒少鍵，但至少其中一鍵對應值之型別錯誤）
+ **隨意新增原先不存在該物件的屬性**

1. 物件的屬性若直接代入 Nullable Type，則不會被視為 `any` 型別，而是等同於該 Nullable Type 本身的值（`undefined` 型別的值就是 `undefined`；`null` 型別的值就是 `null`）
2. `delete` 目前在 TS 就算被使用在刪除物件屬性上，TS 依舊不會警告你 （參見這個 [Issue](https://github.com/Microsoft/TypeScript/issues/13783)）（*這個行為可能隨時隨地會被更改掉，不過不知道是什麼時候*）

## Day04前線維護函式型別X積極註記 Function Types

### 函式型別 Function Types

## Day05前線維護陣列型別X型別陣列-Array Types

### 陣列型別Array Types

#### `union` 小提示

```typescript
let A: T | U | V;
```

### 重點 2. 陣列的型別推論與註記時機

1. 大部分的狀態下，陣列型別的推論是符合開發者期待的
2. 除非遇到以下狀況，才需要對儲存陣列型別的變數積極地作型別註記：
   + **空陣列值必須積極註記**，這是會了要革除 `any` 可能帶來的禍害
   + **陣列裡的元素沒有你要求的型別**，可以用 `union` 技巧作積極的型別註記
3. 為了程式碼的可讀性，通常一個陣列擁有多個型別的話（也就是 Heterogenous Type Array），建議還是用 `union` 註記一下，不然要在陣列裡面用人眼遍歷過陣列的每一個值對應的每個型別 —— 跟直接註記比起來：型別註記是比較恰當的選擇喔

## Day 06. 前線維護・陣列與函式 X 陣列與元組 - Array & Functions & Tuples

## Day 07. 前線維護・列舉型別 X 主觀列舉 - Enumerated Types
