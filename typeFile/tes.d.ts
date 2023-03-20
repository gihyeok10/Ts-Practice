interface StringOnly {
    age: "20";
    [key: string]: string;
}
declare let users: StringOnly;
interface MyCssType {
    "font-size": MyCssType | number;
}
declare let css: MyCssType;
