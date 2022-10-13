const kvArray = [
  { a: 1, value: 10 },
  { a: 2, value: 20 },
  { a: 3, value: 30 },
];

const reformattedArray = kvArray.map(({ a, value }) => ({ a: value }));
console.log(reformattedArray);
