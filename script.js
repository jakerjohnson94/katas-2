function add(a, b) {
  return a + b;
}
console.log("add 2,4: " + add(2, 4));

function multiply(a, b) {
  let result = 0;
  for (let i = 1; i <= b; i++) {
    result = add(result, a);
  }
  return result;
}
console.log("multiply 6,8: " + multiply(6, 8));

function power(x, n) {

  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = multiply(result, x);
  }
  return result;
}
console.log("power 6,2: " + power(6, 2));

function factorial(a) {

  let result = 1;
  for (let i = 1; i <= a; i++) {
    result = multiply(result, i);
  }
  return result;
}
console.log("factoral 4: " + factorial(4));

function fibonacci(n) {
  
  let p1 = 0;
  let p2 = 0;
  var result = 0;
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      result = 0;
      p1 = result;
    }
    else if (i === 1) {
      result = 1;
      p2 = result;
    } else{
      result = add(p1, p2);
      p1 = p2;
      p2 = result;
    }
  }
  return result;
}
console.log("fibonacci 8: " + fibonacci(8));
