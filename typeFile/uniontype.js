var 회원 = 123;
회원 = "김기혁";
// union type... (새로운 타입)
var 회원들 = [1, "장", 3];
var 오브젝트 = { a: 1213 };
var 이름;
// 모든 자료형을 허용해줌 => 타입 스크립트의 의미가 없어짐.. 타입실드 해제
var 이름2;
// any와 같고 조금 더 안전 (오류 메시지는 나옴.)
이름: 123;
이름: true;
var 어레이 = [1, "2", 3];
var 오브젝 = { data: "123" };
var user = "kim";
var age = undefined;
var married = false;
var 철수 = [user, age, married];
var 학교 = {
    score: [100, 97, 53],
    teacher: "최무식",
    friend: "john",
};
학교.score[4] = false;
학교.friend = ["lee", 학교.teacher];
