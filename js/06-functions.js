/* functions */

function greetings() {
  return 'Welcome to BINUS'
}
// console.log(greetings())

// function square(num) {
//   return num * num
// }
// console.log(square(4));

function addSquare(a, b) {
  function square(num) {
    return num * num
  }
  return square(a) + square(b)
}

// a = addSquare(4, 5) // 41
// b = addSquare(5, 5) // 50
// console.log(a, b)
