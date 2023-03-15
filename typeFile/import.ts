function 함수<MyType>(x: MyType[]): MyType {
  return x[0];
}

let a = 함수<number>([4, 5, 6]);
let b = 함수<string>(["22", "22", "11"]);
// a의 타입은 unknown
// Generic 함수 만들기
console.log(a);

interface LengthCheck {
  length: number;
}

function 함수4<Type extends LengthCheck>(x: Type) {
  // x자리가 뭐가 들어올지 몰라서 에러 네로잉 해야댐
  // 파라미터 제한두기
  return x.length;
}
let x = 함수4<string>("함수에타입 파라미터를 넣을 수 있음.");

//  숙제

interface 타입기계 {
  length: number;
}
function 기계함수<Mysok extends string | string[]>(x: Mysok): number {
  let result = x.length;
  return result;
}

console.log("몇개:", 기계함수<string>("hello"));
console.log("몇개:", 기계함수<string[]>(["kim", "park"]));

interface Animal22 {
  name: string;
  age: number;
}

let data = '{"name": "dog", "age":1}';
function 동물함수<Type>(x: string): Type {
  return JSON.parse(x);
}

let result = 동물함수<Animal22>(data);
console.log(result);

class Persson<Type> {
  name;
  constructor(a: Type) {
    this.name = a;
  }
}
let z = new Persson<number>(1);
console.log(typeof z.name);
