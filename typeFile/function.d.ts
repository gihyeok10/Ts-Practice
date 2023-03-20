declare function 함수1(x: number): number;
declare const 함수2: (x: number) => number;
declare function 하수(x?: number): void;
declare function 안녕하세요(x?: string): void;
declare function 숫자세기(x: number | string): number;
declare function 결혼확률(pay: number, house: boolean, atra: string): string | void;
declare function 마지막(x: number | string): string | number;
declare function 내함수(x: number | string): void;
declare function 내함수2(x: number | string): void;
declare function clean(x: (number | string)[]): number[];
declare function 과목출력(x: {
    subject: string | string[];
}): void;
declare const arr: {
    lll: string[];
};
type Animal = string | number | undefined;
declare let 동물: Animal;
type Animal2 = {
    name: string;
    age: number;
};
declare let 동물2: Animal2;
declare const 출생지역: {
    region: string;
};
type Girlfriend = {
    readonly name?: string;
};
declare const 여친: Girlfriend;
type Name = string;
type Age = number;
type Person = Name | Age;
type PositionX = {
    x: number;
};
type PositionY = {
    y: number;
};
type NewType = PositionX & PositionY;
declare let position: NewType;
type AS = {
    x: number;
    y: string;
};
type Aw = {
    x: number;
    y: string;
};
type Plus = AS & Aw;
type Obj = {
    color?: string;
    size: number;
    readonly position: number[];
};
declare let 테스트용변수: Obj;
type Infor = {
    name: string;
    phone: number;
    email: string;
};
type Adult = {
    adult: boolean;
};
type Plus2 = Infor & Adult;
declare let inww: Plus2;
declare let 리트럴: "kim";
declare let 접니다: "대머리" | "솔로";
declare function 햠수(a: "hello"): 1 | 0;
declare function rsp(a: "가위" | "바위" | "보"): ("가위" | "바위" | "보")[];
declare var 자료: {
    name: "kim";
};
declare var 자아료: {
    readonly name: "kim";
};
declare function 자료함수(a: "kim"): void;
type 함수타입 = (a: string) => number;
declare let 함수타입한거: 함수타입;
type 회원정보타입 = (x: number) => number;
type 회원정보타입2 = () => void;
declare let 회원정보: {
    name: string;
    plusOne: 회원정보타입;
    changeName: 회원정보타입2;
};
type cutZeroType = (x: string) => string;
declare let cutZero: cutZeroType;
type removeDashType = (a: string) => number;
declare let removeDash: removeDashType;
type 함수타입1 = (x: string) => string;
type 함수타입2 = (x: string) => number;
declare function slsl(a: string, b: 함수타입1, c: 함수타입2): number;
declare let title: Element | null;
declare let link: NodeListOf<Element>;
declare let btn: Element | null;
declare class Person2 {
    name: string;
    constructor(a: string);
    함수(a: string): void;
}
declare let 사람1: Person2;
declare let 사람2: Person2;
declare class Car {
    model: string;
    price: number;
    constructor(a: string, b: number);
    tax(a: number): number;
}
declare let car1: Car;
declare class Word {
    num: number[];
    str: string[];
    constructor(...param: any[]);
}
declare let 결과: Word;
interface Square2 {
    color: string;
    width: number;
}
declare let dowl: Square2;
interface Student {
    name: string;
}
interface Teacher extends Student {
    age: number;
}
declare let 학생: Student;
declare let 선생: Teacher;
interface Mange {
    brand: string;
    serialNumber: number;
    model: string[];
}
declare let 상품: Mange;
interface Cart2 {
    card: boolean;
}
interface Cart extends Cart2 {
    product: string;
    price: number;
}
declare let 장바구니: Cart[];
interface Match {
    plus: (a: number, b: number) => number;
    minus: (a: number, b: number) => number;
}
declare let oj: Match;
