var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// rest parameter 타입 지정 가능
// 파라미터 맨 뒤에 써야함
function 레스터() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    console.log(a);
}
레스터(1, 2, 3, 4, 5, 6, 7, true);
// 배열로 저장이된다.
// ... spread
var arra = [1, 2, 3];
var arr2 = [4, 5];
var arr3 = __spreadArray(__spreadArray([], arra, true), arr2, true);
// 괄호 벗기기
console.log(arr3);
// spread operator 문법
// destructuring 문법
var _a = ["안녕", 100], 변수1 = _a[0], 변수2 = _a[1];
console.log(변수1);
var _b = { student: true, agee: 20 }, student = _b.student, agee = _b.agee;
var 옵젝 = { student: true, agee: 20 };
console.log(student);
function 디스터(_a) {
    var student = _a.student, agee = _a.agee;
    console.log(student, agee);
}
디스터(옵젝);
function 최댓값기계() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    var count = a.sort();
    console.log("카운트", count[count.length - 1]);
}
최댓값기계(5, 6, 8, 3, 1, 2, 3, 2, 1);
function 디스터링(_a) {
    var users = _a.users, comment = _a.comment, admin = _a.admin;
    console.log(users, comment, admin);
}
디스터링({ users: "kim", comment: [2, 2, 1], admin: false });
function 어레이파라(_a) {
    var number = _a[0], name = _a[1], boll = _a[2];
    console.log(number, name, boll);
}
어레이파라([10, "와인", true]);
