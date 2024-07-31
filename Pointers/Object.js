let obj1 = { value: 22 };
let obj2 = obj1;

// now obj1 and obj2 are equal.
obj1.value = 50;

// now obj1.value is 50 and also obj2.value is same with obj1.value.

let obj3 = { value: 90 };
obj2 = obj3;

// now obj2 and obj3 are equal.

obj1 = obj2;

// now obj1, obj2 and obj3 are same value.
