//* Array
const array = [1, 2, 3, 4, 5, 6];
// console.log(array);
// [LOG] [1,2,3,4,5,6]

const result = array.map(element => element + 2);
// console.log(result);
// [LOG] [3,4,5,6,7,8]

//* Dictionaries
const myObj = { name: 'Bob', age: '43' };

myObj.age = 51; // update value

myObj.city = 'Buffalo'; // add new key & value

delete myObj.age; // delete key

// console.log(myObj);
//[LOG] {"name":"Bob","city":"Buffalo"}

// console.log(myObj['name']);
//[LOG] Bob

//* Sets
const mySet = new Set([1, 2, 3, 4, 5]);
// console.log(mySet);
// [LOG]Set { 1, 2, 3, 4, 5 }
mySet.add(6);
// console.log(mySet);
// [LOG]Set { 1, 2, 3, 4, 5, 6 }
mySet.delete(1);
// console.log(mySet);
// [LOG]Set { 2, 3, 4, 5, 6 }

const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([4, 5, 6, 7, 8]);
//*union
const unionSet = new Set([...set1, ...set2]);
// console.log(unionSet);
// [LOG]Set { 1, 2, 3, 4, 5, 6, 7, 8 }

//*intersection
const intersectionSet = new Set([...set1].filter(x => set2.has(x)));
// console.log(intersectionSet);
// [LOG]Set { 4, 5 }

//*difference
const differenceSet = new Set([...set1].filter(x => !set2.has(x)));
// console.log(differenceSet);
// [LOG]Set { 1, 2, 3 }
const symmetricDifferenceSet = new Set(
  [...set1]
    .filter(x => !set2.has(x))
    .concat([...set2].filter(x => !set1.has(x)))
);
// console.log(symmetricDifferenceSet);
// [LOG]Set { 1, 2, 3, 6, 7, 8 }
