## TypeScript

- 타입스크립트는 최신 ECMA 스크립트르 반영하며, 타입, 인터페이스, 데코레이터, 클래스, 변수, 제네릭, 열거 타입, public, protected, private 키워드가 추가된 것

- 암시적 타입선언

```ts
let textCode = 1;
```

textcode는 number 타입으로 암시적 타입선언이 되었다.

```ts
let firstName: string;
let age: number;
```

- string - 문자열
- boolean - true/false
- number - 숫자
- symbol - Symbol 생성자를 호출해 생성된 고윳값
- any - 모든 타입을 허용하는 타입. 코드를 쓰는 동안 정해지지 않은 변수를 지정할 수 있음
- unknown - any와 비슷하나 먼저 타입을 지정하거나 좁히지 않으면 조작이 허용되지 않음
- never - 도달할 수 없는 코드를 나타냄
- void - 값이 없음

타입스크립트 역시 자바스크립트에서 '값이 없음'을 나타내는 null과 undefined 값을 가진다. 값이 할당되지 않은 변수는 초기값으로 undefined를 가지며 그 자체로 undefined 타입니다. 값을 반환 하지 않는 함수 역시 undefined를 반환한다. 반면 **null은 명시적으로 값이 비어있음을 나타내며 객체이다.**

**null 과 undefined를 모든 변수에 할당할 수 있지만, 여러 타입과 섞어 사용되는 것이 일반적이다.**

```ts
  function getName():string|null{
    ...
  }
```

대부분의 프로그래밍 언어와 마찬가지로, 문자열을 반환하는 함수를 선언해도 null을 반환할 수 있는 가능성이 있겠지만, 이렇게 null을 명시적으로 작성해주면 코드 가독성이 향상된다.

**any 타입**은 숫자, 텍스트, 부울, 또는 Customer 같은 커스텀 타입 값을 할당할 수 있다. 그러나 any 타입을 사용하면 타입 체크의 장점을 잃고 코드의 가독성도 떨어지기 때문에 되도록이면 사용하지 않는 것이 좋다.

**never타입**은 절대 반환을 하지 않는 함수에 사용한다. 절대로 실행이 종료되지 않는 함수나 오류를 발생시키기 위해서만 존재하는 함수를 예로 들 수 있다. 아래 화살표 함수는 반환되지 않으며 타입 검사기는 never 타입을 반환한다고 유추한다.

아래의 화살표 함수는 반환되지 않으며, 타입 검사기는  
 **never 타입을 반환한다고 유추한다.**

```ts
const logger = () => {
  while (true) {
    console.log("서버가 실행 중입니다");
  }
};
```

**생성한 함수를 변수에 할당하는 방법을 함수 표현식**이라고 하는데, 이 역시 타입을 반환한다. 위 코드에서 logger 타입은 never다.

void 타입은 변수 선언이 아나리, 값을 반환하지 않는 함수를 선언하는데 사용된다.

```ts
function logError(errorMessage: string): void {
  console.error(errorMessage);
}
```

**nerver 타입과는 다르게 void 함수는 실행을 완료하지만 값을 반환하지는 않는다.**

- 런타임 중에 함수 본문에 return 문이 없는 경우 undefined을 반환하지만, void 타입을 사용하면 이와 같은 실수를 방지할 수 있음

타입스크립트 내 타입 표기는 선택사항이다. 일부 변수에 타입 표기가 없다면, 타입스크립트의 타입 검사기는 해당 타입을 유추함

```ts
let name1 = "김힘찬";
let name2: string = "김힘찬";
```

첫 번째 행은 name1의 타입이 문자열임을 유추할 수 있음, 두 번째 행은 타입스크립트 스타일로 name2를 선언하고 문자열을 타입 표기하여 초기화한다.

**두번 째 행의 경우, 타입 스크립트 문법에 문제가 없지만, 변수의 값이 문자열이므로 타입스크립트가 이미 string으로 유추했기 때문에 또 다시 타입을 지정할 필요가 없다**

따라서 타입스크립트 컴파일러가 유추 가능한 곳에 명시적으로 타입을 추가하는 것을 피해야 한다.

```ts
const age = 25; // 상수 age 타입이 없다.
function getTax(income: number): number {
  return income * 0.15;
}
let yourTax = getTax(5000); // 변수 yourTax의 타입은 없다.
```

타입스크립트는 문자열 리터럴을 타입으로 사용할 수 있다. 아래 코드의 변수 name3의 값 John Smith가 타입 값으로 선언되었다.

```ts
let name3: `John Smith`;
name3 = `Mary Lou`; // name3는 `John Smith`라는 타입을 가지므로 error 발생
```

_타입확장_  
_초기값 없이 변수를 선언하면 타입스크립트 컴파일러는 any 타입으로 유추한다. 이처럼 컴파일러가 변수 타입을 유추하는 것을 타입 확장(type widening)이라고 부른다._

```ts
let productId;
productId = null;
productId = undefined;
```

타입스크립트 컴파일러는 any 타입으로 유추하고 null과 undefined 값에 할당한다. 따라서 변수 productId의 타입은 any다.

타입스크립트 컴파일러는 --strictNullCheck 옵션을 통해 타입이 정해진 변수에 null이 입력되는 것을 막는다. 아래 코드 스니펫에서 --strictNullCheck 옵션을 적용하면 productId의 타입은 number가 되며, 두 번째와 세 번째 줄은 컴파일 되지 않음

```ts
let productId = 123;
productId = null; // 컴파일 오류
productId = undefined; // 컴파일 오류
```

--strictNullCheck 옵션은 undefined 값을 잡는 데도 도움이 된다. 예를 들어 어떤 함수가 조건부 프로퍼티가 들어있는 객체를 반환할 때 여러분이 짠 코드는 해당 프로퍼티가 존재한다고 착각하고 함수를 적용하려 들 수도 있음

## 2.7

**typeof와 instanceOf 타입가드**
조건문을 적용해 변수 타입을 세분화하는 것을 타입 축소(type narrow)라고 하며, if문은 typeof 타입 가드를 사용해 둘 이상의 타입을 허용하도록 그 범위를 축소했다. 런타임 동안 padding의 실제 타입을 확인하기 위해 typeof를 사용했다.

이와 유사하게 instanceof는 2.2에서 설명할 커스텀 타입과 함께 사용된다. instanceof 가드는 런타임 동안 실제 객체 타입을 확인한다.

```ts
if(person instanceof Person){...}
```

typeof는 타입스크립트 내장 타입에 사용되며, instanceof은 사용자가 만든 타입에 사용된다는 차이가 있음

## 2.8 클래스 내 커스텀 타입 사용

```ts
class Person {
  firstName: string;
  lastName: string;
  age: number;
}

const p = new Person();
p.firstName = "John";
p.lastName = "Smith";
p.age = 25;
```

js로 컴파일 했을 때

```js
"use stritct";
class Person {}
const p = new Person();
p.firstName = "John";
p.lastName = "Smith";
p.age = 25;
```

위 코드에서 자바스크립트는 Person 클래스의 프로퍼티가 없다. Person 생성자를 선언하지 않았기 때문에 인스턴스를 만든 후에 프로퍼티를 초기화했다. 생성자는 클래스 인스턴스가 생성된 후에 한 번만 실행되는 특별한 함수

```ts
class Person {
  constructor(
    public firstName: string,
    public lastName: string,
    public age: number
  ) {}
}

const p = new Person("John", "Smith", 25);
```

```js
"use strict";
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}

const p = new Person("John", "Smith", 25); // constructor 값이 없으면 에러남
```

**별도의 타입없이 p를 선언할 수도 있지만, 조금 더 명확하게 할 수도 있다.**

```ts
const p: Person = new Person("John", "Smith", 25);
```

**이는 때로는 명시적인 타입 표기를 생략해도 된다는 것을 보여준다. 상수를 선언하고 타입 객체를 초기화했기 때문에 타입스크립트 검사기는 타입을 추론하고 상수 p에 타입을 할당할 수 있다. 생성된 자바스크립트 역시 상수 p의 타입을 다시 지정하지 않고 타입스크립트 코드와 동일 하다.**

클래스 프로퍼티를 선언할 때 readonly 제한자를 사용할 수 있다. 클래스 생성자 내부 등에 프로퍼티를 초기화하는 경우, 그 값이 바뀌지 않아야 하는 경우가 종종 있다. readonly 제한자는 변경 불가능한 상수를 나타내는 const 키워드와 비슷하지만, 다만 const는 클래스 프로퍼티에 사용할 수 없다.

```ts
class Block {
  readonly nonce: number; // 생성자 내부에 초기화된 프로퍼티
  readonly hash: string;
  constructor(
    readonly index: number, // 초기화 중 프로퍼티 값이 생성자로 전달된다.
    readonly previousHash: string,
    readonly timestamp: number,
    readonly data: string
  ) {
    const { nonce, hash } = this.mine(); // main()메서드에서 반환된 객체를 구조 분해 구문으로 상수를 선언
    this.nonce = nonce;
    this.hash = hash;
  }
}
// 이후 코드 생략
```

Block 클래스는 총 6개의 readonly 프로퍼티를 가진다. 생성자 파라미터에 클래스 프로퍼티를 명시적으로 선언하지 않아도 된다. 위의 코드에서 클래스의 두 프로퍼티가 명시적으로 선언 되었고, 나머지 4개는 그렇지 않다.

### 인터페이스를 사용한 커스텀 타입

대다수 많은 객체 지향 언어는 인터페이스 문법 구조가 있는데, 이는 객체 프로퍼티 또는 메서드 구현을 위해 사용된다. (자바스크립트에는 인터페이스가 없음)

**타입스크립트는 인터페이스를 지원하는 interface와 implements 키워드가 있는데, 이들은 자바스크립트로 컴파일 되지 않는다** 개발 도중 잘못된 타입을 피할 수 있게 도와주는 역할을 할 뿐이다

```ts
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
```

위 처럼, p에서 Person 타입을 지운다고 하더라도 savePerson()함수를 호출할 수 있다. 그 이유는 **타입스크립트의 구조적 타입 시스템** 때문이다. 타입스크립트는 두 타입의 구조만을 가지고 호환성을 결정한다. **서로 다른 타입임에도 멤버가 서로 일치한다면 두 타입은 서로 호환되며 명시적인 표시는 필요하지 않다.**

## type, interface, class를 언제 사용해야 할까?

런타임 동안 객체를 인스턴스화한다면 interface 또는 type을 사용하고, 그 반대의 경우에는 class를 사용한다. 즉 **값을 나타내는 데 사용해야 하는 경우 class를 사용한다**

타입스크립트로 안전하게 커스텀 타입을 선언하고자 한다면 type 또는 interface를 사용한다. 이 두 키워드들은 자바스크립트 코드로 컴파일되지 않으므로 런타임 코드 용량이 더 작아진다. 그러나 **class는 자바스크립트 코드로 컴파일되기 때문에 용량이 커진다.**

type 키워드는 interface와 동일한 기능뿐만 아니라 더 많은 기능을 사용할 수 있다. 예를 들어 interface는 합집합 또는 교집합 개념을 사용할 수 없지만 type은 사용 가능하다.

2.17 구조적 타입 시스템과 명목적 타입 시스템

자바 같은 일부 객체지향 언어는 같은 네임스페이스 안에 같은 이름으로 선언된 클래스를 동일하다고 판단한다.

**타입스크립트에서는 구조적 타입 시스템을 사용한다.**  
(즉 이름이 다르더라도, 구조만 같으면 된다.)

### 타입가드 in

타입 가드 in 키워드는 타입 범위를 축소하는 표현이다. 예를 들어 유니온 타입 인자를 가진 함수는 호출하는 동안 실제 값을 체크할 수 았다. 아래 코드를 보면 서로 다른 프로퍼티를 가진 두 인터페이스가 있다. foo() 함수는 a 또는 b 프로퍼티를 가지고 있고, 타입 가드 in은 foo() 함수 본문에서 반환 전 특정 프로퍼티가 파라미터 객체에 포함되어 있는지를 확인한다.

```ts
interface A {
  a: number;
}
interface B {
  b: string;
}

function foo(x: A | B) {
  if ("a" in x) {
    return x.a;
  }

  return x.b;
}
```

### 2.3 any, unknwon

any 타입의 변수는 모든 타입의 값을 가질 수 있다. 타입스크립트에서 타입을 작성하지 않는다면 자바스크립트와 차이점이 없다. 마찬가지로 any 타입 역시 존재하지 않는 프로퍼티에 접근하면 런타임 중 예기치 않은 오류가 발생할 수 있다.

unknown 타입은 타입스크립트 3.0 버전에 도입됐다. 컴파일러는 프로퍼티에 접근하기 전 unknown 타입의 변수에 타입 범위를 줄이라고 경고한다. 따라서 런타임 오류를 방지할 수 있다.
