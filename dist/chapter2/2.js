"use strict";
// const ord = Symbol("orderID");
// const myOrder = {
//   ord: "123",
// };
// console.log(myOrder["ord"]);
function calcTax(state, income, dependents) {
    if (state === "NY") {
        return income * 0.06 - dependents * 500;
    }
    if (state === "NJ") {
        return income * 0.05 - dependents * 300;
    }
}
/*만약 없는 주를 추가한다면 undefined가 반환된다. 타입스크립트에서는
undefined가 될 수 있다는 경고 메시지를 표시하지 않는다. 아래와 같이 타입스크립트 구문을 추가해
결과 값이 number 또는 undefined 타입으로 반환될 수 있음을 경고할 수 있다.
function calcTax(
  state: string,
  income: number,
  dependents: number
): number | undefined */
/* 유니온 타입 */
function padLeft(value, padding) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    else {
        return padding; //never 타입임 why? 절대 실행될 수 없기 때문
    }
}
