//       Измените функцию add таким образом, чтобы
//       все условия ниже вывели в консоль true
const add = (a, b) => {
  if (Number.isNaN(a) || Number.isNaN(b)) return 0;
  if ( a === undefined || b=== undefined) return 0;
  return Number(a) + Number(b);
};
console.log(add(1, 2) === 3);
console.log(add(1, "2") === 3);
console.log(add("1", 3) === 4);
console.log(add("2", "2") === 4);
console.log(add(NaN, 2) === 0);
console.log(add("", 2) === 2);
console.log(add() === 0);
console.log(add(true, true) === 2);
