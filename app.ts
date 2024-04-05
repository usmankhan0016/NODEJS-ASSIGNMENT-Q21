// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

// Person object Data Type:
interface person {
  name: string;
  age: Number;
  religion: string;
  Student: boolean;
}

// Person object (Object no:1)
let person: person = {
  name: "Usman Khan",
  age: 18,
  religion: "Islam",
  Student: true,
};
console.log(person);

// Car object Data Type:
interface car {
  name: string;
  maker: string;
  color: string;
  SUV: boolean;
}

// Car object (object no:2)
let car = {
  name: "Fortuner",
  maker: "Toyota",
  color: "Black",
  SUV: true,
};
console.log(car);
