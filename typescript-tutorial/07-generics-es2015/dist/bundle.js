(()=>{"use strict";({607:function(){var n=this&&this.__awaiter||function(n,e,t,o){return new(t||(t=Promise))((function(i,l){function c(n){try{r(o.next(n))}catch(n){l(n)}}function u(n){try{r(o.throw(n))}catch(n){l(n)}}function r(n){var e;n.done?i(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(c,u)}r((o=o.apply(n,e||[])).next())}))};(new Map).set(1,"Hello world");let e=new Set;function t(n,e){return new Promise((t=>{setTimeout((()=>{t(e)}),n)}))}e.add(123),e.values(),e.clear(),new Map,new Set,new Map([[123,"hello wrold"]]),new Set([1,2,3,4,5]),function*(){yield 1,yield 2,yield 3,yield 4,yield 5}(),function*(n=0){let e=n;for(;;)e+=(yield e)}(),function(){return n(this,void 0,void 0,(function*(){const e=yield function(){return n(this,void 0,void 0,(function*(){return console.log("First async function called."),yield t(1e3,"Hello!")}))}();return console.log("Second async function called."),yield t(2e3,"example6_2"),e}))}().then(console.log)}})[607]()})();