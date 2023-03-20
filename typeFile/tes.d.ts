interface StringOnly {
    age: "20";
    [key: string]: string;
}
declare let users: StringOnly;
interface MyCssType {
    "font-size": MyCssType | number;
}
declare let css: MyCssType;
interface Per {
    age: number;
    name: string;
}
type PersonKeys = keyof Per;
declare let a2: PersonKeys;
declare let ofj: {
    name: string;
    age: number;
};
type CarModel = {
    color: boolean;
    model: boolean;
    price: boolean | number;
};
type Changer<MyType> = {
    [key in keyof MyType]: string;
};
type 새타입 = Changer<Car>;
