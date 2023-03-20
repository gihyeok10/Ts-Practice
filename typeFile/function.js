function 함수1(x) {
    return x * 2;
}
함수1(30);
함수1(90);
var 함수2 = function (x) {
    return x * 3;
};
function 하수(x) {
    1 + 1;
}
//void => return쓰기 싫은 함수에 쓰여짐 return 못함 텅 비었다?
// x? x가 들어올수도 안들어올수도 있다.  number|undefined 랑 똑같다 하나의 유니온 타입
함수2(2);
function 안녕하세요(x) {
    if (x) {
        console.log("안녕하세요" + x);
    }
    else {
        console.log("입력하세요");
    }
}
function 숫자세기(x) {
    var num = x.toString().length;
    return 1;
}
function 결혼확률(pay, house, atra) {
    var num = 0;
    if (house == true) {
        num += pay + 500;
    }
    else {
        num += pay;
    }
    if (atra === "상") {
        num += 100;
    }
    else {
        num += 0;
    }
    if (num >= 600) {
        return "결혼가능";
    }
}
console.log(결혼확률(100, true, "상"));
// 네로잉 함수
// 타입을 하나로 거른다.
function 마지막(x) {
    if (typeof x === "string" || typeof x === "number") {
        return x + "1";
    }
    else {
        return x + 1;
    }
}
function 내함수(x) {
    var array = [];
    if (typeof x === "number") {
        array[0] = x;
    }
}
function 내함수2(x) {
    var array = [];
    array[0] = x;
}
//assertion 문법의 용도 => 여러개 중에 하나로 확정할때 쓰는거. && 무슨타입이 뭔지 확실히 알때만 쓰기
// assertion 타입 덮어 씌우기
function clean(x) {
    var finish = [];
    x.forEach(function (item) {
        if (typeof item === "string") {
            finish.push(parseFloat(item));
        }
        else {
            finish.push(item);
        }
    });
    return finish;
}
console.log(clean([123, "22", 123, "521"]));
function 과목출력(x) {
    if (Array.isArray(x.subject) === true) {
        var le = 0;
        le = x.subject.length - 1;
        console.log("이사람의 마지막 과목은??:", x.subject[le]);
    }
    else {
        console.log("이사람은 하나의 과목:", x.subject);
    }
}
과목출력({ subject: ["과학", "수학", "물리"] });
var arr = { lll: ["아아", "메메"] };
console.log(arr.lll.length);
var 동물 = "kim";
var 동물2 = { name: "kim", age: 20 };
// 오브젝트 안에 자료는 자유롭게 수정이 가능하다.
var 출생지역 = { region: "seoul" };
출생지역.region = "daegu";
//? option string|undefined
var 여친 = {
    name: "엠버",
};
// => {x:number, y:number}
var position = { x: 10, y: 20 };
var 테스트용변수 = {
    size: 123,
    position: [1, 2, 4, 5],
};
var inww = {
    name: "김기혁",
    email: "gh9812301",
    phone: 123123,
    adult: true,
};
// Literal Types
var 리트럴;
// 변수에 kim 밖에 못 들어옴
var 접니다;
접니다 = "대머리";
접니다 = "솔로";
// 변수에 뭐가 들어올지 더 엄격하게 관리가능 (자동완성 힌트)
function 햠수(a) {
    return 0;
}
햠수("hello");
//함수에도 가능
function rsp(a) {
    return ["가위"];
}
// 리트럴 타입 => const 업글버전?
var 자료 = {
    name: "kim",
};
var 자아료 = {
    name: "kim",
};
//as const readonly로 바꿔주고, value값을 그대로 타입으로 지정해줌
function 자료함수(a) { }
// kim이라는 type만 들어올수 있습니다. 고로 자료.name은 못 들어옴. //저렇게 타입을 kim으로 바꿔주면 가능
내함수(자료.name);
var 함수타입한거 = function (a) {
    return 10;
};
var 회원정보 = {
    name: "kim",
    plusOne: function (x) {
        return x + 1;
    },
    changeName: function () {
        console.log("안녕");
    },
};
회원정보.plusOne(2);
회원정보.changeName();
var cutZero = function (x) {
    var result = x.replace(/^0+/, "");
    return result;
};
var removeDash = function (a) {
    var result = a.replace(/-/g, "");
    return parseFloat(result);
};
function slsl(a, b, c) {
    var result = b(a);
    var result2 = c(result);
    return result2;
}
console.log(slsl("010-1111-2222", cutZero, removeDash));
// html 적용
var title = document.querySelector("#title");
// let title = document.querySelector("#title")as Element; 사기
if (title instanceof Element) {
    title.innerHTML = "반가워요";
}
//네로잉 밥법 instanceof
var link = document.querySelectorAll(".naver");
link.forEach(function (a) {
    if (a instanceof HTMLAnchorElement) {
        a.href = "https://kakao.com";
    }
});
var btn = document.querySelector("#button");
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", function () {
    console.log("두어개");
});
// 클래스 맨위에 name을 선언해주고 쓴다.
var Person2 = /** @class */ (function () {
    function Person2(a) {
        this.name = a;
    }
    Person2.prototype.함수 = function (a) {
        console.log("hi eeeee");
    };
    return Person2;
}());
var 사람1 = new Person2("오코차");
var 사람2 = new Person2("오코기");
console.log(사람1);
var Car = /** @class */ (function () {
    function Car(a, b) {
        this.model = a;
        this.price = b;
    }
    Car.prototype.tax = function (a) {
        return a * 0.2;
    };
    return Car;
}());
var car1 = new Car("소나타", 3000);
console.log(car1.tax(car1.price));
var Word = /** @class */ (function () {
    function Word() {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        var 숫자 = [];
        var 문자 = [];
        param.forEach(function (item) {
            if (typeof item === "string") {
                문자.push(item);
            }
            else {
                숫자.push(item);
            }
        });
        this.num = 숫자;
        this.str = 문자;
    }
    return Word;
}());
var 결과 = new Word("kim", 4444, "nuee", 222, "yue");
console.log(결과);
var dowl = {
    color: "red",
    width: 100,
};
// extends로 복사가능 interface는 name을 복사했음.
var 학생 = { name: "kim" };
var 선생 = { name: "kim", age: 20 };
var 상품 = {
    brand: "samsung",
    serialNumber: 1360,
    model: ["tv", "phone"],
};
var 장바구니 = [
    { product: "청소기", price: 7000, card: false },
    { product: "삼다수", price: 800, card: true },
];
var oj = {
    plus: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    },
};
console.log(oj.plus(4, 6));
