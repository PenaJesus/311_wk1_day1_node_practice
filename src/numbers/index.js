/** 
 * This Function should return true if the number is even and false if the number is odd
@param {number} num : the number to evaluate
@ return true if num is even, false if num is odd */


const isEven = (num) => {
  // write code for numbers.isEven
return num % 2 === 0;
}

const sum = (arr) => {
  // write code for numbers.sum
 return arr.reduce((total, amount) => total + amount)
}

//go through array and combo of num when added together return given value return boolean
const comboSum = (arr, sum) => { 
  for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr.length; j++){
      if(arr[i] + arr[j] === sum){
        return true
      } else 
      {
        return false
      }
    }
  }
  // write code for numbers.comboSum
}

module.exports = {
  isEven,
  sum,
  comboSum
}