function sleep(milliseconds) {
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
};

function sum(...args) {
  sleep(500);
  return args.reduce((sum, arg) => {
    return sum += +arg;
  }, 0);
};

function compareArrays( arr1, arr2 ) {
  if (arr1.length !== arr2.length) return false
  return arr1.every((element, index) => element === arr2[index])
};

function memorize(fn, limit) { 
  const memory = [];
  return function(...args) {
    const getMem = memory.find((elem => compareArrays(elem.args,args)))
    if(getMem) {
      return getMem.result
    };
    const result = fn(...args)
    if (memory.length <= limit) {
      memory.push({args: args, result: result});
    } else {     
      memory.push({args: args, result: result});
      memory.shift()      
    }
    return result
  } 
}

// const test = memorize(compareArguments,10);
const sums = memorize(sum, 3);
sums(2,3)
sums(4,5)
sums(5,4)
sums(4,5)
sums(4,7)
sums(4,8, 5)
console.log(sums(4,9));
console.log(sums(1,3));
