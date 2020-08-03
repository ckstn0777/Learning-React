"use strict";
// 타입 정의를 안한다면 자동으로 any임.
function sum(x, y) {
    return x + y;
}
sum(4, 6);
function sumArray(number) {
    return numbers.reduce((acc, current) => acc + current, 0);
}
const total = sumArray([1, 2, 3, 4, 5]);
