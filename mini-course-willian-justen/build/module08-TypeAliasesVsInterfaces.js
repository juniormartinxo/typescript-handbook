"use strict";
const $ = {
    a: 'a',
    b: 'b',
};
console.log($);
/* error TS2345: Argument of type '{ a: string; b: string; }' is not assignable to parameter of type 'iJQuery'.
type iJQuery = {
    b: string
}
*/
const jq = {
    a: 'a',
};
console.log(jq);
;
[1, '2', 3, 4];
[1, 'casa', 3, 4];
