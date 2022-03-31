/**
 * Write a function called stringifyNumbers, which takes in an object and finds
 * all of the values which are numbers and converts them to strings.
 */

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/

// modifies original obj
function stringifyNumbers(obj) {
  for (let k in obj) {
    if (typeof obj[k] === 'object') {
      stringifyNumbers(obj[k]);
    }
    if (typeof obj[k] === 'number') {
      obj[k] = String(obj[k]);
    }
  }
}

function stringifyNumbers1(obj) {
  let newObj = obj;

  function helper(o) {
    for (let k in o) {
      if (typeof o[k] === 'object') {
        stringifyNumbers(o[k]);
      }
      if (typeof o[k] === 'number') {
        newObj[k] = String(o[k]);
      }
    }
  }

  helper(obj);
  return newObj;
}


let obj = {
  num: 1,
  test: [1, 2, 3, 4],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66
    }
  }
};
stringifyNumbers1(obj);
console.log(obj);