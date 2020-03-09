const one = 1;
const two = one * 2;

const toString = two.toString();
const twoString = '' + two;
const twoString2 = `${two}`;

const obj: Record<string, any> = {
  key: 'value',
};

const objToString = obj.toString();
const objString = '' + obj;
const objString2 = `${obj}`;

const arr = [1, 2, 3];

const arrMap = arr.map(value => value.toString());

obj.one = one;
obj.arr = arr;

console.log(twoString);

const jsonString = JSON.stringify(obj);

console.error(jsonString);

console.warn(JSON.parse(jsonString));

console.info('arr[4]', arr[4]);
