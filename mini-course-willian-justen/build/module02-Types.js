"use strict";
// boolean (true/ false)
let isOpen;
isOpen = true;
// string ('foo', "foo", `foo`)
let message;
message = `foo ${isOpen}`;
// number () int, float, hex, binary)
let total;
total = 0xff0;
// array (type[])
let items;
items = ['foo', 'bar'];
// generic
let values;
values = [1, 2, 3];
// tupla
let title;
title = [1, 'foo'];
// enum
var Colors;
(function (Colors) {
    Colors["white"] = "#fff";
    Colors["black"] = "#000";
})(Colors || (Colors = {}));
// any (never use)
let anything;
anything = 1;
anything = '1';
anything = [8];
// void
function logger() {
    console.log('foo');
}
// never
function error() {
    throw new Error('error');
}
// object
let cart;
cart = {
    key: '001',
};
