function factorialI(num){
  let total = 1;
  while(num > 1){
    total *= num;
    num--;
  }
  return total;
}

function factorialR(num){
  // base case
  if (num === 1) return 1;
  // diff input 
  return num * factorialR(--num);
}

console.log(factorialR(5));