// iterative function
function countDownI(num){
  while(num >= 0){
    console.log(num);
    num--;
    console.log('Done!');
  }
}

// recursive function
function countDownR(num) {
  // base case
  if (num <= 0) {
    console.log('Done!');
    return;
  }
  // different input
  console.log(num);
  countDownR(--num);
}

countDownR(5);
