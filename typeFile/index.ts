// let members: string[] = ["kim", "park"];
// let membersNumber: number[] = [15, 19];

// let meem: { member: string; membaer2: string } = {
//   member: "kim",
//   membaer2: "park",
// };

// const userName: string = "김기혁";
// const userAge: number = 13;
// const userArea: string = "대전";

// const like: { songName: string; singer: string } = {
//   songName: "아이야",
//   singer: "휘재",
// };

// let projects: { members: string[]; days: number; started: boolean } = {
//   members: ["kim", "pakr"],
//   days: 30,
//   started: true,
// };

// 다른 파일에 있는 변수를 재정의 하는 함수 declare
// 타입 스크립트 끼리는 import export 안해도댐

// d.ts타입 갖다 쓰기
import { Age2, Persons } from "./test";

let king: Age2;
king = 12;
console.log(king);

let 이름: string = "김기";
type Ageg = number;

// d.ts.파일은 자동으로 글로벌 모듈이 아니므로 export 해줘야함.
