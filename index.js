// require('./palindrome.js');
// Given a string, return a new string with the reversed
// order of characters

// 1)using reverse method
function reverse(str){
  const arr = str.split('')
  arr.reverse()
 return arr.join('')
}

// 2) using for loop
function reverse(str){
  let reversed = ''

  for (let character of str) {
    reversed = character + reversed
  }

  return reversed
}

// 3) more complex way
//we take the character we are on and add it to reversed
function reverse(str){
  return str.split('').reduce((reversed, character) => {
    return character + reversed
  }, '')
}

function test(){
  let result = reverse("hello");
  if (result !== "olleh"){
    console.log("failed")
    return;
  }
  console.log("Successful")
  
}

test()

reverse('hello')
