declare function 레스터(...a: (number | boolean)[]): void;
declare let arra: number[];
declare let arr2: number[];
declare let arr3: number[];
declare let 변수1: string, 변수2: number;
declare let student: boolean, agee: number;
declare let 옵젝: {
    student: boolean;
    agee: number;
};
declare function 디스터({ student, agee }: {
    student: boolean;
    agee: number;
}): void;
declare function 최댓값기계(...a: number[]): void;
declare function 디스터링({ users, comment, admin, }: {
    users: string;
    comment: number[];
    admin: boolean;
}): void;
declare function 어레이파라([number, name, boll]: (number | string | boolean)[]): void;
declare function nulldefiend(a: string | undefined): void;
type Fish = {
    swim: string;
};
type Bird = {
    fly: string;
};
declare function 동물농장(animal: Fish | Bird): void;
type Cars = {
    wheel: "4개";
    color: string;
};
type Bike = {
    wheel: "2개";
    color: string;
};
declare function 자전거와차(x: Cars | Bike): void;
declare function never(): never;
declare class Users {
    name: string;
    private familyName;
    constructor(a: any);
    이름변경함수(): void;
}
declare let 유저1: Users;
declare class Persones {
    name: string;
    constructor(name: string);
}
declare let 자식1호: Persones;
declare class Userlcass {
    static skill: string;
    intro: string;
}
declare class NewUser extends Userlcass {
}
declare let 철수2: Userlcass;
declare let 철수3: Userlcass;
declare class 숙제 {
    private static x;
    private y;
    addOne(a: number): number;
    printX(): void;
}
declare let 철수5: 숙제;
declare class Square {
    width: number;
    height: number;
    color: string;
    constructor(width: number, height: number, color: string);
    draw(): void;
}
declare let 네모나: Square;
