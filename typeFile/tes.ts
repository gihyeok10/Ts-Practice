console.log("테스트.ts파일");

// index 시그니처

// 모든 속성은 string일때 지정하는 방법
interface StringOnly {
  age: "20";
  [key: string]: string;
  //   모든 string 타입 속성 한번에 타입 지정하기
}

let users: StringOnly = {
  name: "kim",
  age: "20",
  location: "seoul",
};

interface MyCssType {
  "font-size": MyCssType | number;
  //   recursive 타입
}
let css: MyCssType = {
  "font-size": {
    "font-size": {
      "font-size": 14,
    },
  },
};

// keyof 키워드 /타입 변환기(mapping)

interface Per {
  age: number;
  name: string;
}
type PersonKeys = keyof Per;
let a2: PersonKeys = "name";
let ofj = {
  name: "kim",
  age: 20,
};
console.log(Object.keys(ofj));

type CarModel = {
  color: boolean;
  model: boolean;
  price: boolean | number;
};

// 타입 변환

type Changer<MyType> = {
  [key in keyof MyType]: string;
};

type 새타입 = Changer<Car>;
