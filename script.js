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
  
 
  let a = [0,1];
  for (let i = 2; i < n; i++) {
    a[i] = add(a[i-1], a[i-2])
  }
  return a[n-1];
}
console.log("fibonacci 9: " + fibonacci(9));
