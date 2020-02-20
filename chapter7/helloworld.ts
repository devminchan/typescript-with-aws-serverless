// primary types
let isRun: boolean = false;
let decimal: number = 10;
let hex: number = 0xff;

let firstName: string = "김";
let lastName: string = "철수";

console.log(isRun + ", " + decimal + ", " + hex + ", " + firstName + lastName);

// array
let thisisArray: number[] = [1, 2, 3];
let italsoArray: Array<number> = [4, 5, 6];

console.log("array: " + thisisArray + " / " + italsoArray);

// tuple
let point: [string, number] = ["x", 10];
point = ["y", 20];

console.log("point: " + point);

// enum
enum Color { Red = 1, Green, Blue }
let color: Color = Color.Green;
console.log("color: " + color);

// any
let sure: any = 1;
sure = "sure!";
sure = true;
console.log("sure: " + sure);

// void
function log(msg): void {
  console.log("LOG: " + msg);
}

log("1234");

// never
// always throw error or infinite-function
function error(msg): never {
  throw new Error(msg);
  // or
  // while (true) {}
}

// error("1234");

// object typing
let user: { name: string, age: number } = { name: "김민찬", age: 20 };
console.log(user.name + " " + user.age + "세");

// type alias
type UNIQID = string | null;

function getUserId(id: UNIQID) {
  console.log(id);
}

getUserId('aiejfu3-345asd');
getUserId(null);
// getUserId(12); // compile error!

type USER_TYPE = 'TESTER' | 'ADMIN';
let userType: USER_TYPE = 'TESTER'; // ide intellisense

// functions
function pointFunc(x: number, y: number = 10, z?: number): number { // default value, optional value
  if (z) {
    return x + y + z;
  }

  return x + y;
}

console.log("new point 1: " + pointFunc(1));
console.log("new point 2: " + pointFunc(1, 2));
console.log("new point 3: " + pointFunc(1, 2, 3));
// pointFunc("s", "d"); // compile error!

function cities(name: string, ...restNames: string[]) { // function with rest parameters
  return name + "," + restNames.join(",");
}

console.log(cities("서울", "부산", "대구"));

// interface
interface Size {
  width: number;
  height: number;
}

interface Label {
  title: string;
  size: Size;
}

function labelPrint(label: Label): void {
  console.log(label);
}

let myLabel = <Label>{
  title: '타입스크립트 도서', size: { width: 20, height: 29 }
};

labelPrint(myLabel);

interface Config {
  name: string;
  path: string;
  version?: string;
}

interface App {
  fullpath: string;
  version?: string;
}

function appInit(config: Config): App {
  let app = { fullpath: config.path + config.name } as App; // or <App> { ... } or let app: App = { ... }

  if (config.version) {
    app.version = config.version;
  }

  return app;
}

console.log(appInit(<Config>{ path: '/home/', name: 'user' }));
console.log(appInit(<Config>{ path: '/home/', name: 'user', version: '0.1.1' }));