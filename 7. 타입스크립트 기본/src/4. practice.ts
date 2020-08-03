interface Person {
  name: string;
  age?: number;
}
interface Developer extends Person {
  skills: string[];
}

const person: Person = {
  name: "verlopert",
  age: 20, // 생략 가능
  // skills: ["piano"]  // 에러 발생
};

const expert: Developer = {
  name: "김개발",
  skills: ["javascript", "react"],
};
