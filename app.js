// STATIC OBJECT METHODS
//ASSIGN()
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const returnedTarget = Object.assign(target, source);
console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }
console.log(returnedTarget === target);
// Expected output: true


//CREATE()
const person = {
  isHuman: false,
  printIntroduction() {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  },
};

const me = Object.create(person);

me.name = "Matthew"; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // Inherited properties can be overwritten

me.printIntroduction();
// Expected output: "My name is Matthew. Am I human? true"

//DEFINEPROPERTIES()
const object = {};

Object.defineProperties(object, {
  property1: {
    value: 42,
    writable: true,
  },
  property2: {},
});

console.log(object.property1);
// Expected output: 42


//DEFINEPROPERTY()
console.log()
const object2 = {};

Object.defineProperty(object2, "foo", {
  value: 42,
  writable: false,
});

object2.foo = 77;
// Throws an error in strict mode

console.log(object2.foo);
// Expected output: 42



//ENTRIES()
const object3 = {
  a: "some string",
  b: 42,
};

for (const [key, value] of Object.entries(object3)) {
  console.log(`${key}: ${value}`);
}

// Expected output:
// "a: some string"
// "b: 42"


//FREEZE()
const obj = {
  prop: 42,
};

Object.freeze(obj);

obj.prop = 33;
// Throws an error in strict mode

console.log(obj.prop);
// Expected output: 42


//FROMENTRIES()
const entries = new Map([
  ["foo", "bar"],
  ["baz", 42],
]);

const obj2 = Object.fromEntries(entries);

console.log(obj2);
// Expected output: Object { foo: "bar", baz: 42 }


//GETOWNPROPERTYDESCRIPTOR()
const object4 = {
  foo: 42,
};

const descriptor = Object.getOwnPropertyDescriptor(object4, "foo");

console.log(descriptor.configurable);
// Expected output: true

console.log(descriptor.value);
// Expected output: 42


//GETOWNPROPERTYDESCRIPTORS()
const object5 = {
  foo: 42,
};

const descriptors = Object.getOwnPropertyDescriptors(object5);

console.log(descriptors.foo.writable);
// Expected output: true

console.log(descriptors.foo.value);
// Expected output: 42


//GETOWNPROPERTYNAMES()
const object6 = {
  a: 1,
  b: 2,
  c: 3,
};

console.log(Object.getOwnPropertyNames(object6));
// Expected output: Array ["a", "b", "c"]



//GETOWNPROPERTYSYMBOLS()
const object7 = {};
const a = Symbol("a");
const b = Symbol.for("b");

object7[a] = "localSymbol";
object7[b] = "globalSymbol";

const objectSymbols = Object.getOwnPropertySymbols(object7);

console.log(objectSymbols.length);
// Expected output: 2


//GETPROTOTYPEOF()
const prototype = {};
const object8 = Object.create(prototype);

console.log(Object.getPrototypeOf(object8) === prototype);
// Expected output: true


//GROUPBY()
const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 9 },
  { name: "bananas", type: "fruit", quantity: 5 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 12 },
  { name: "fish", type: "meat", quantity: 22 },
];

const result = Object.groupBy(inventory, ({ quantity }) =>
  quantity < 6 ? "restock" : "sufficient",
);
console.log(result.restock);
// [{ name: "bananas", type: "fruit", quantity: 5 }]

//HASOWN()
const object9 = {
  prop: "exists",
};

console.log(Object.hasOwn(object9, "prop"));
// Expected output: true

console.log(Object.hasOwn(object9, "toString"));
// Expected output: false

console.log(Object.hasOwn(object9, "undeclaredPropertyValue"));
// Expected output: false


//IS()
console.log("\nTHE is()")
console.log(Object.is("1", 1));
// Expected output: false

console.log(Object.is(NaN, NaN));
// Expected output: true

console.log(Object.is(-0, 0));
// Expected output: false

const obj3 = {};
console.log(Object.is(obj, {}));
// Expected output: false

// isExtensible()

// isFrozen()

// isSealed()

//KEYS()
const object10 = {
  a: "some string",
  b: 42,
  c: false,
};

console.log(Object.keys(object10));
// Expected output: Array ["a", "b", "c"]

//PREVENTEXTENSIONS()
// const objecto = {};

// Object.preventExtensions(objecto);

// try {
//   Object.defineProperty(objecto, "foo", {
//     value: 42,
//   });
// } catch (e) {
//   console.log(e);
//   // Expected output: TypeError: Cannot define property foo, object is not extensible
// }


//SEAL()
const object11 = {
  foo: 42,
};

Object.seal(object11);
object11.foo = 33;
console.log(object11.foo);
// Expected output: 33

delete object11.foo; // Cannot delete when sealed
console.log(object11.foo);
// Expected output: 33


//SETPROTOTYPEOF()
const objj = {};
const parentt = { foo: "bar" };

console.log(objj.foo);
// Expected output: undefined

Object.setPrototypeOf(objj, parentt);

console.log(objj.foo);
// Expected output: "bar"


//VALUES()
const object12 = {
  a: "some string",
  b: 42,
  c: false,
};

console.log(Object.values(object12));
// Expected output: Array ["some string", 42, false]
