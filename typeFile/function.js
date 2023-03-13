function 함수(x) {
    return x * 2;
}
함수(30);
함수(90);
var 함수2 = function (x) {
    return x * 3;
};
function 하수(x) {
    1 + 1;
}
//void => return쓰기 싫은 함수에 쓰여짐 return 못함 텅 비었다?
// x? x가 들어올수도 안들어올수도 있다.  number|undefined 랑 똑같다 하나의 유니온 타입
함수2(2);
// function 마지막(x:number |string):void{
//     if(네로잉?){
//     console.log(x+3)
//     }
// }
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
    return;
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
