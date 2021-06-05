/**
 *  ARRAY BASIC
 */

let myArr = ['Apple', 'Banana'];
console.log(myArr);
console.log(myArr.length);

myArr.forEach(function(item, index, array) {
    console.log(index, item);
})

myArr.push('Orange');
console.log("Push item : ",myArr);

myArr.pop('Orange');
console.log("Pop item : ",myArr);

myArr.shift();
console.log("Shift first item : ",myArr);

myArr.unshift('Strawberry');
console.log("Add first item (Unshift): ",myArr);

console.log("Find position Banana (indexOf): " + myArr.indexOf('Banana'));

console.log("Remove any position (splice(pos, n)): " + myArr.splice(0, 2));
console.log(myArr);

console.log('--------------------------------------------')


