/**
 * Write a recursive function called nestedEvenSum, return the sum of all
 * even numbers in an object which may contain nested objects
 */

function nestedEvenSum(obj) {
  let arr = [];
  for(let k in obj){
    if(typeof obj[k] === 'object'){
      arr = arr.concat(nestedEvenSum(obj[k]));
    }
    if(typeof obj[k] === 'number' && obj[k] % 2 === 0){
      arr.push(obj[k]);
    }
  }

  let sum=0;
  for(let n of arr){
    sum+=n;
  }
  return sum;


  // loop keys in obj
    // if typeof obj[k] === object, toSum = toSum.concat(nestedEvenSum(obj[k]))
    // if typeof obj[k] === 'number' && obj[k] % 2 === 0, toSum.push(obj[k])
  // loop toSum 
    // calculate sum
  // return sum

}


var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {
    b: 2,
    bb: {
      b: 3,
      bb: {
        b: 2
      }
    }
  },
  c: {
    c: {
      c: 2
    },
    cc: 'ball',
    ccc: 5
  },
  d: 1,
  e: {
    e: {
      e: 2
    },
    ee: 'car'
  }
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10