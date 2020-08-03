"use strict";
function merge(a, b) {
    return Object.assign(Object.assign({}, a), b);
}
const merged = merge({ foo: 1 }, { bar: 2 });
function wrap(param) {
    return {
        param,
    };
}
const wrapped = wrap(10);
const items = {
    list: ["a", "b", "c"],
};
