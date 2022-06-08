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
absolutelyEitherNullOrString = "assigned with string,again";