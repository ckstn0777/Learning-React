// Shape 라는 interface를 선언합니다
interface Shape {
  // Shape interface에는 getArea라는 함수가 꼭 있어야 하며 해당 함수의 반환값은 숫자
  getArea(): number;
}

class Circle implements Shape {
  // implements 키워드를 사용하여 해당 클래스가 Shape interface의 조건을 충족하겠다는 뜻
  // radius: number; // 멤버 변수 radius 값을 설정

  constructor(public radius: number) {
    this.radius = radius;
  }

  // 너비를 가져오는 함수를 구현
  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}

class Rectangle implements Shape {
  // width: number;
  // height: number;

  constructor(private width: number, private height: number) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

const circle: Circle = new Circle(5);
const rectangle: Rectangle = new Rectangle(2, 5);

const shapes: Shape[] = [circle, rectangle];
shapes.forEach((shape) => {
  console.log(shape.getArea());
});
