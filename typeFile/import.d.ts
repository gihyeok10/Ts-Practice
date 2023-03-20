declare function 함수<MyType>(x: MyType[]): MyType;
declare let a: number;
declare let b: string;
interface LengthCheck {
    length: number;
}
declare function 함수4<Type extends LengthCheck>(x: Type): number;
declare let x: number;
interface 타입기계 {
    length: number;
}
declare function 기계함수<Mysok extends string | string[]>(x: Mysok): number;
interface Animal22 {
    name: string;
    age: number;
}
declare let data: string;
declare function 동물함수<Type>(x: string): Type;
declare let result: Animal22;
declare class Persson<Type> {
    name: any;
    constructor(a: Type);
}
declare let z: Persson<number>;
