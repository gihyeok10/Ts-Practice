function 함수1(x: number): number {
  return x * 2;
}
함수1(30);
함수1(90);

const 함수2 = (x: number): number => {
  return x * 3;
};

function 하수(x?: number): void {
  1 + 1;
}
//void => return쓰기 싫은 함수에 쓰여짐 return 못함 텅 비었다?
// x? x가 들어올수도 안들어올수도 있다.  number|undefined 랑 똑같다 하나의 유니온 타입
함수2(2);

function 안녕하세요(x?: string): void {
  if (x) {
    console.log("안녕하세요" + x);
  } else {
    console.log("입력하세요");
  }
}

function 숫자세기(x: number | string): number {
  let num = x.toString().length;
  return 1;
}

function 결혼확률(pay: number, house: boolean, atra: string): string | void {
  let num = 0;
  if (house == true) {
    num += pay + 500;
  } else {
    num += pay;
  }

  if (atra === "상") {
    num += 100;
  } else {
    num += 0;
  }

  if (num >= 600) {
    return "결혼가능";
  }
}

console.log(결혼확률(100, true, "상"));

// 네로잉 함수
// 타입을 하나로 거른다.
function 마지막(x: number | string) {
  if (typeof x === "string" || typeof x === "number") {
    return x + "1";
  } else {
    return x + 1;
  }
}

function 내함수(x: number | string) {
  let array: number[] = [];
  if (typeof x === "number") {
    array[0] = x;
  }
}

function 내함수2(x: number | string) {
  let array: number[] = [];
  array[0] = x as number;
}

//assertion 문법의 용도 => 여러개 중에 하나로 확정할때 쓰는거. && 무슨타입이 뭔지 확실히 알때만 쓰기
// assertion 타입 덮어 씌우기

function clean(x: (number | string)[]) {
  let finish: number[] = [];

  x.forEach((item) => {
    if (typeof item === "string") {
      finish.push(parseFloat(item));
    } else {
      finish.push(item);
    }
  });
  return finish;
}

console.log(clean([123, "22", 123, "521"]));

function 과목출력(x: { subject: string | string[] }) {
  if (Array.isArray(x.subject) === true) {
    let le = 0;
    le = x.subject.length - 1;
    console.log("이사람의 마지막 과목은??:", x.subject[le]);
  } else {
    console.log("이사람은 하나의 과목:", x.subject);
  }
}

과목출력({ subject: ["과학", "수학", "물리"] });

const arr = { lll: ["아아", "메메"] };
console.log(arr.lll.length);

// 변수에 타입 지정 (타입 에일리어스 => 별칭)
// type 작명할때 영어 대문자로 국룰 && 뒤에 type정도?
type Animal = string | number | undefined;
let 동물: Animal = "kim";
type Animal2 = { name: string; age: number };
let 동물2: Animal2 = { name: "kim", age: 20 };

// 오브젝트 안에 자료는 자유롭게 수정이 가능하다.
const 출생지역 = { region: "seoul" };
출생지역.region = "daegu";

//여친 오브젝트 수정을 막으려면?
type Girlfriend = {
  readonly name?: string;
};
//? option string|undefined

const 여친: Girlfriend = {
  name: "엠버",
};

//readonly => 읽기 전용 수정 불가 but js파일에는 실행됌

// 타입 합치기
type Name = string;
type Age = number;
type Person = Name | Age;

type PositionX = { x: number };
type PositionY = { y: number };
//같은 이름의 type 변수 재정의 불가능
type NewType = PositionX & PositionY;
// => {x:number, y:number}

let position: NewType = { x: 10, y: 20 };

type AS = { x: number; y: string };
type Aw = { x: number; y: string };

type Plus = AS & Aw;

type Obj = { color?: string; size: number; readonly position: number[] };

let 테스트용변수: Obj = {
  size: 123,
  position: [1, 2, 4, 5],
};

type Infor = { name: string; phone: number; email: string };

type Adult = { adult: boolean };

type Plus2 = Infor & Adult;

let inww: Plus2 = {
  name: "김기혁",
  email: "gh9812301",
  phone: 123123,
  adult: true,
};

// Literal Types

let 리트럴: "kim";
// 변수에 kim 밖에 못 들어옴
let 접니다: "대머리" | "솔로";
접니다 = "대머리";
접니다 = "솔로";
// 변수에 뭐가 들어올지 더 엄격하게 관리가능 (자동완성 힌트)

function 햠수(a: "hello"): 1 | 0 {
  return 0;
}
햠수("hello");
//함수에도 가능

function rsp(a: "가위" | "바위" | "보"): ("가위" | "바위" | "보")[] {
  return ["가위"];
}

// 리트럴 타입 => const 업글버전?

var 자료: { name: "kim" } = {
  name: "kim",
};

var 자아료 = {
  name: "kim",
} as const;

//as const readonly로 바꿔주고, value값을 그대로 타입으로 지정해줌

function 자료함수(a: "kim") {}

// kim이라는 type만 들어올수 있습니다. 고로 자료.name은 못 들어옴. //저렇게 타입을 kim으로 바꿔주면 가능
내함수(자료.name);

// 새로운 함수타입 표현방법

type 함수타입 = (a: string) => number;

let 함수타입한거: 함수타입 = function (a) {
  return 10;
};
// 오브젝트안에 함수 타입 지정

type 회원정보타입 = (x: number) => number;
type 회원정보타입2 = () => void;
let 회원정보: {
  name: string;
  plusOne: 회원정보타입;
  changeName: 회원정보타입2;
} = {
  name: "kim",
  plusOne(x) {
    return x + 1;
  },
  changeName: () => {
    console.log("안녕");
  },
};

회원정보.plusOne(2);
회원정보.changeName();

type cutZeroType = (x: string) => string;
let cutZero: cutZeroType = function (x) {
  let result = x.replace(/^0+/, "");
  return result;
};

type removeDashType = (a: string) => number;
let removeDash: removeDashType = function (a) {
  let result = a.replace(/-/g, "");
  return parseFloat(result);
};

type 함수타입1 = (x: string) => string;
type 함수타입2 = (x: string) => number;

function slsl(a: string, b: 함수타입1, c: 함수타입2): number {
  let result = b(a);
  let result2 = c(result);

  return result2;
}

console.log(slsl("010-1111-2222", cutZero, removeDash));

// html 적용
let title = document.querySelector("#title");
// let title = document.querySelector("#title")as Element; 사기
if (title instanceof Element) {
  title.innerHTML = "반가워요";
}
//네로잉 밥법 instanceof
let link = document.querySelectorAll(".naver");

link.forEach((a) => {
  if (a instanceof HTMLAnchorElement) {
    a.href = "https://kakao.com";
  }
});

let btn = document.querySelector("#button");
btn?.addEventListener("click", function () {
  console.log("두어개");
});

// 클래스 맨위에 name을 선언해주고 쓴다.
class Person2 {
  name: string;
  constructor(a: string) {
    this.name = a;
  }
  함수(a: string) {
    console.log("hi eeeee");
  }
}
let 사람1 = new Person2("오코차");
let 사람2 = new Person2("오코기");

console.log(사람1);

class Car {
  model: string;
  price: number;
  constructor(a: string, b: number) {
    this.model = a;
    this.price = b;
  }
  tax(a: number): number {
    return a * 0.2;
  }
}

let car1 = new Car("소나타", 3000);
console.log(car1.tax(car1.price));

class Word {
  num: number[];
  str: string[];

  constructor(...param) {
    let 숫자: number[] = [];
    let 문자: string[] = [];

    param.forEach((item) => {
      if (typeof item === "string") {
        문자.push(item);
      } else {
        숫자.push(item);
      }
    });
    this.num = 숫자;
    this.str = 문자;
  }
}

let 결과 = new Word("kim", 4444, "nuee", 222, "yue");
console.log(결과);

// interface 문법

interface Square2 {
  color: string;
  width: number;
}

let dowl: Square2 = {
  color: "red",
  width: 100,
};

interface Student {
  name: string;
}

interface Teacher extends Student {
  age: number;
}
// extends로 복사가능 interface는 name을 복사했음.

let 학생: Student = { name: "kim" };
let 선생: Teacher = { name: "kim", age: 20 };

//type과 interface 차이 ==> interface는 중복 선언이 가능.

interface Mange {
  brand: string;
  serialNumber: number;
  model: string[];
}

let 상품: Mange = {
  brand: "samsung",
  serialNumber: 1360,
  model: ["tv", "phone"],
};

interface Cart2 {
  card: boolean;
}
interface Cart extends Cart2 {
  product: string;
  price: number;
}

let 장바구니: Cart[] = [
  { product: "청소기", price: 7000, card: false },
  { product: "삼다수", price: 800, card: true },
];

interface Match {
  plus: (a: number, b: number) => number;
  minus: (a: number, b: number) => number;
}

let oj: Match = {
  plus(a, b) {
    return a + b;
  },
  minus(a, b) {
    return a - b;
  },
};

console.log(oj.plus(4, 6));
