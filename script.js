function add(a, b) {
  return a + b;
}
console.log("add 2,4: " + add(2, 4));

function multiply(a, b) {
  var result = 0;
  for (i = 1; i <= b; i++) {
    result = add(result, a);
  }
  return result;
}
console.log("multiply 6,8: " + multiply(6, 8));

function power(x, n) {
  let i;
  var result = 0;
  for (i = 1; i < n; i++) {
    while (i === 1) {
      result = multiply(x, x);
      i++;
    }
    result = multiply(result, x);
  }
  return result;
}
console.log("power 2,8: " + power(2, 8));

function factorial(a) {
  let i;
  var result = 1;
  for (i = 1; i <= a; i++) {
    result = multiply(result, i);
  }
  return result;
}
console.log("factoral 4: " + factorial(4));

function fibonacci(n) {
  let i;
  var p1 = 0;
  var p2 = 0;
  var result = 0;
  for (i = 0; i < n; i++) {
    if (i === 0) {
      result = 0;
      p1 = result;
    }
    if (i === 1) {
      result = 1;
      p2 = result;
    } else {
      result = add(p1, p2);
      p1 = p2;
      p2 = result;
    }
  }
  return result;
}
console.log("fibonacci 8: " + fibonacci(8));
