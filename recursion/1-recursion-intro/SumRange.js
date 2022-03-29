function sumRangeI(num) {
  let sum = 0;
  while (num >= 1) {
    sum += num;
    num--;
  }
  return sum;
}

function sumRangeR(num) {
  // base case
  if (num === 1) return 1;
  // diff input
  return num + sumRangeR(--num);
}

console.log(sumRangeI(5));