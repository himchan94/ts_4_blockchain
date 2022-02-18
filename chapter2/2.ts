// const ord = Symbol("orderID");
// const myOrder = {
//   ord: "123",
// };

// console.log(myOrder["ord"]);

function calcTax(
  state: string,
  income: number,
  dependents: number
): number | undefined {
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

function padLeft(value: string, padding: string | number): string {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }

  if (typeof padding === "string") {
    return padding + value;
  } else {
    return padding; //never 타입임 why? 절대 실행될 수 없기 때문
  }
}

/* 커스텀 타입 정의 */
type Foot = number;
type Pound = number;

type Patient = {
  name: string;
  height: Foot;
  weight: Pound;
};

let patient: Patient = {
  name: "Joe Smith",
  height: 5,
  weight: 100, // optional하게 사용하고 싶다면 ?를 붙이면 됨
};

/*함수 시그니처에도 type 키워드와 타입 별칭을 사용할 수 있다.
예를들어 폼 양식이 있고 입력된 값의 유효성을 검사하는 ValidatorFn이라는 함수를 구현하다고 가정
ValidatorFn 함수는 특정 시그니처가 필요하다. FormControl 타입 객체를 받아서
값이 유요한 경우 null을 반환하고 그렇지 않으면 오류를 설명하는 객체 반환 */

type ValidatorFn = (c: FormControl) => { [key: string]: any } | null;

class FormControl {
  constructor(initialValue: string, validator: ValidatorFn | null) {}
}

class Person {
  constructor(
    public firstName: string,
    public lastName: string,
    public age: number
  ) {}
}

// const p = new Person("John", "Smith", 25);

interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

function savePerson(person: Person): void {
  console.log("Saving ", person);
}

const p = {
  firstName: "John",
  lastName: "Smith",
  age: 25,
};

savePerson(p);

/* 커스텀 타입의 유니온 */

// export class SearchAction {
//   actionType = "SEARCH";
//   constructor(
//     readonly payload: {
//       searchQuery: string;
//     }
//   ) {}
// }

// export class SearchSuccessAction {
//   [1];
//   actionType = "SEARCH_SUCCESS";
//   constructor(public payload: { searchResults: string[] }) {}
// }

// export class SearchFailedAction {
//   actionType = "SEARCH_FAILED";
// }

// // 유니온 타입
// export type SearchActions =
//   | SearchAction
//   | SearchSuccessAction
//   | SearchFailedAction;

/* */
type Human = {
  address: string;
};

let person1: any;
person1 = JSON.parse('{"adress":"25 Broadway"}');

console.log(person1.address); // undefined 출력

let person2: unknown;

person2 = JSON.parse('{"adress":"25 Broadway"}');

// console.log(person2.address) 에러코드 발생

const isPerson = (object: any): object is Person => "address" in object;

if (isPerson(person2)) {
  console.log(person2.address);
} else {
  console.log("person2 is not a Person");
}
