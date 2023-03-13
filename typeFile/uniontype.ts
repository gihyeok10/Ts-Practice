let 회원: number | string = 123;
회원 = "김기혁";
// union type... (새로운 타입)

let 회원들: (number | string)[] = [1, "장", 3];
let 오브젝트: { a: string | number } = { a: 1213 };

let 이름: any;
// 모든 자료형을 허용해줌 => 타입 스크립트의 의미가 없어짐.. 타입실드 해제
let 이름2: unknown;
// any와 같고 조금 더 안전 (오류 메시지는 나옴.)
이름: 123;
이름: true;

let 어레이: (number | string)[] = [1, "2", 3];
let 오브젝: { data: string | number } = { data: "123" };

let user: string = "kim";
let age: undefined | number = undefined;
let married: boolean = false;
let 철수: (string | undefined | boolean | number)[] = [user, age, married];

let 학교: {
  score: (number | boolean)[];
  teacher: string;
  friend: string | string[];
} = {
  score: [100, 97, 53],
  teacher: "최무식",
  friend: "john",
};

학교.score[4] = false;
학교.friend = ["lee", 학교.teacher];
