"use strict";
const numbers01 = [1, 2, [1, 2, [1, 2, [1, 2, [1, 2]]]]];
numbers01.push([15, 652, [4242, 5125]]);
function isJSON(arg) { }
isJSON('hi');
isJSON(1);
isJSON({ a: [123], v: { x: 1 } });
isJSON([1, { a: [123], v: { x: 1 } }]);
