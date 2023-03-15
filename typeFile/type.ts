// rest parameter 타입 지정 가능
// 파라미터 맨 뒤에 써야함
function 레스터(...a: (number | boolean)[]) {
  console.log(a);
}

레스터(1, 2, 3, 4, 5, 6, 7, true);
// 배열로 저장이된다.

// ... spread

let arra = [1, 2, 3];
let arr2 = [4, 5];
let arr3 = [...arra, ...arr2];
// 괄호 벗기기

console.log(arr3);
// spread operator 문법

// destructuring 문법

let [변수1, 변수2] = ["안녕", 100];

console.log(변수1);

let { student, agee } = { student: true, agee: 20 };
let 옵젝 = { student: true, agee: 20 };
console.log(student);

function 디스터({ student, agee }: { student: boolean; agee: number }) {
  console.log(student, agee);
}

디스터(옵젝);

function 최댓값기계(...a: number[]) {
  let count = a.sort();
  console.log("카운트", count[count.length - 1]);
}

최댓값기계(5, 6, 8, 3, 1, 2, 3, 2, 1);

function 디스터링({
  users,
  comment,
  admin,
}: {
  users: string;
  comment: number[];
  admin: boolean;
}) {
  console.log(users, comment, admin);
}

디스터링({ users: "kim", comment: [2, 2, 1], admin: false });

function 어레이파라([number, name, boll]: (number | string | boolean)[]) {
  console.log(number, name, boll);
}

어레이파라([10, "와인", true]);

// 다양한 네로잉 typeof로 안될때

function nulldefiend(a: string | undefined) {
  if (a && typeof a === "string") {
    // a가 undefined면 이 조건식 자체가 undefined가 됌 if문 실행 x
  }
}

type Fish = { swim: string };
type Bird = { fly: string };

// in을 써서 속성을 파악
function 동물농장(animal: Fish | Bird) {
  if ("swim" in animal) {
    animal.swim;
  }
}

type Cars = {
  wheel: "4개";
  color: string;
};

type Bike = {
  wheel: "2개";
  color: string;
};

function 자전거와차(x: Cars | Bike) {
  if (x.wheel === "4개") {
    console.log("x는car타입이에요", x);
  } else {
    console.log("x는 자전거 타입이에요", x.color);
  }
}
자전거와차({ wheel: "2개", color: "white" });

// never 타입
// 뭔가를 리턴하지 않음 return값이 없어야함
function never(): never {
  throw new Error();

  // 강제로 에러 내기
}

// 퍼블릭 => name 속성을 갖다쓰고 자유롭게 수정가능  -있으나 없으나
class Users {
  name: string;
  private familyName: string = "kim";
  constructor(a) {
    this.name = this.familyName + a;
  }

  //   프로토 타입 함수 라인 앞에 funciton 안붙임
  이름변경함수() {
    this.familyName = "park";
  }
}

// private => 자식들 수정 불가능 class 안에서만 사용 조회는 가능한데 수정은x class안에서만 수정이 가능
// 밖에서 수정하려면? 프로토타입 함수 라인에 변경 함수를 만들어서 사용한다.

let 유저1 = new Users("민수");
console.log(유저1.name);
유저1.이름변경함수();
console.log(유저1);

class Persones {
  constructor(public name: string) {}
}

let 자식1호 = new Persones("kim혁");
console.log(자식1호.name);
