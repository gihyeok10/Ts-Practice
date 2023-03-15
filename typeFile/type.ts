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
