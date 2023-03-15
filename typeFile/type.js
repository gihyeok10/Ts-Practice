var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// 다양한 네로잉 typeof로 안될때
function nulldefiend(a) {
    if (a && typeof a === "string") {
        // a가 undefined면 이 조건식 자체가 undefined가 됌 if문 실행 x
    }
}
// in을 써서 속성을 파악
function 동물농장(animal) {
    if ("swim" in animal) {
        animal.swim;
    }
}
function 자전거와차(x) {
    if (x.wheel === "4개") {
        console.log("x는car타입이에요", x);
    }
    else {
        console.log("x는 자전거 타입이에요", x.color);
    }
}
자전거와차({ wheel: "2개", color: "white" });
// never 타입
// 뭔가를 리턴하지 않음 return값이 없어야함
function never() {
    throw new Error();
    // 강제로 에러 내기
}
// 퍼블릭 => name 속성을 갖다쓰고 자유롭게 수정가능  -있으나 없으나
var Users = /** @class */ (function () {
    function Users(a) {
        this.familyName = "kim";
        this.name = this.familyName + a;
    }
    //   프로토 타입 함수 라인 앞에 funciton 안붙임
    Users.prototype.이름변경함수 = function () {
        this.familyName = "park";
    };
    return Users;
}());
// private => 자식들 수정 불가능 class 안에서만 사용 조회는 가능한데 수정은x class안에서만 수정이 가능
// 밖에서 수정하려면? 프로토타입 함수 라인에 변경 함수를 만들어서 사용한다.
var 유저1 = new Users("민수");
console.log(유저1.name);
유저1.이름변경함수();
console.log(유저1);
var Persones = /** @class */ (function () {
    function Persones(name) {
        this.name = name;
    }
    return Persones;
}());
var 자식1호 = new Persones("kim혁");
console.log(자식1호.name);
var Userlcass = /** @class */ (function () {
    function Userlcass() {
        this.intro = Userlcass.skill + "전문가 입니다";
    }
    //   static x = 10;
    //   static => 부모class에만 가능 자식에게는 못 물려줌. extends하면 잘 따라옴 private + static 가능
    Userlcass.skill = "js";
    return Userlcass;
}());
// protected => private랑 비슷 extends할때 protected로 한다면 가능
var NewUser = /** @class */ (function (_super) {
    __extends(NewUser, _super);
    function NewUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NewUser;
}(Userlcass));
var 철수2 = new Userlcass();
console.log(철수2);
Userlcass.skill = "ts";
var 철수3 = new Userlcass();
console.log(철수3);
// extend로 복붙
var 숙제 = /** @class */ (function () {
    function 숙제() {
        this.y = 20;
    }
    숙제.prototype.addOne = function (a) {
        var result = 숙제.x + a;
        return result;
    };
    숙제.prototype.printX = function () {
        console.log("x의값은??:", 숙제.x);
    };
    숙제.x = 10;
    return 숙제;
}());
var 철수5 = new 숙제();
console.log(철수5.addOne(5));
철수5.printX();
var Square = /** @class */ (function () {
    function Square(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    Square.prototype.draw = function () {
        var a = Math.random();
        var square = "<div style=\"position:relative; \n        top:".concat(a * 400, "px; \n        left:").concat(a * 400, "px; \n        width:").concat(this.width, "px; \n        height : ").concat(this.height, "px; \n        background:").concat(this.color, "\"></div>");
        document.body.insertAdjacentHTML("beforeend", square);
    };
    return Square;
}());
var 네모나 = new Square(30, 30, "red");
네모나.draw();
네모나.draw();
네모나.draw();
네모나.draw();
