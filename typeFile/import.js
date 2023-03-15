function 함수(x) {
    return x[0];
}
var a = 함수([4, 5, 6]);
var b = 함수(["22", "22", "11"]);
// a의 타입은 unknown
// Generic 함수 만들기
console.log(a);
function 함수4(x) {
    // x자리가 뭐가 들어올지 몰라서 에러 네로잉 해야댐
    // 파라미터 제한두기
    return x.length;
}
var x = 함수4("함수에타입 파라미터를 넣을 수 있음.");
function 기계함수(x) {
    var result = x.length;
    return result;
}
console.log("몇개:", 기계함수("hello"));
console.log("몇개:", 기계함수(["kim", "park"]));
var data = '{"name": "dog", "age":1}';
function 동물함수(x) {
    return JSON.parse(x);
}
var result = 동물함수(data);
console.log(result);
var Persson = /** @class */ (function () {
    function Persson(a) {
        this.name = a;
    }
    return Persson;
}());
var z = new Persson(1);
console.log(typeof z.name);
