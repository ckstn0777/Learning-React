const message: string = "hello world";
console.log(message);

let count = 0; // 타입 생략 가능
count += 1;
// count = "문자열"; // 에러

const msg: string = "hello world";
const done: boolean = false;
const numbers: number[] = [1, 2, 3];
const msgs: string[] = ["hello", "world"];

let mightBeUndefined: string | undefined = undefined; // string 혹은 undefined 가능
let nullableNumber: number | null = null; // or 숫자

let color: "red" | "orange" | "yellow" = "red";
color = "yellow";
// color = "green"; // 에러
