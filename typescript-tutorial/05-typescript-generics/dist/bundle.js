(()=>{"use strict";class e{constructor(e){this.memberProp=e}memberFunc(){return this.memberProp}get value(){return this.memberProp}set value(e){this.memberProp=e}}let t=new e(164);t.memberProp,t.memberFunc(),t.value,t.value=416;let n=new e(614);n.memberProp,n.memberFunc(),n.value,n.value=416;let o=new e(614);o.memberProp,o.memberFunc(),o.value,o.value=416;class s{constructor(e){this.value=e,this.next=null}}const l=new class{constructor(){this.head=null}length(){if(null===this.head)return 0;let e=0,t=this.head;for(;null!==t;)t=t.next,e++;return e}at(e){if(e>=this.length())throw new Error("Index out of bound");let t=0,n=this.head;for(;t!==e;)n=n.next,t++;return n}insert(e,t){const n=this.length(),o=new s(t);if(n<e)throw new Error("Index out of bound");if(n==e)0===e?this.head=o:this.at(e-1).next=o;else if(0===e){const e=this.head;this.head=o,this.head.next=e}else{const t=this.at(e-1),n=t.next;t.next=o,o.next=n}}remove(e){if(e>this.length())throw new Error("Index out of bound");if(e<0)throw new Error("Index out of bound");if(0==e){const e=this.head;if(1==this.length())null!==this.head&&(this.head.next=null),this.head=null;else{const t=null==e?void 0:e.next;this.head=t,this.head.next=t.next}}else{const t=this.at(e-1);if(this.length()==e+1)t.next=null;else{const n=this.at(e);t.next=n.next}}}getInfo(){let e=this.head,t=0;for(;null!=e;)console.log(`Index ${t}: ${e.value}`),e=e.next,t++}};l.insert(0,123),l.insert(1,456),l.insert(2,789),l.insert(1,12321),l.getInfo(),console.log(l.at(0).value),console.log(l.at(1).value),console.log(l.at(2).value),console.log(l.at(3).value),l.remove(1),l.getInfo()})();