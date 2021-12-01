const split = (str, delim) => {
  // write code for strings.split
return str.split("-", 3)
}

const pairs = (str) => {
  // write code for strings.pairs
var arr = []
for (var i = 0; i < str.length; i += 2) {
  arr.push(str.substring(i, i + 2))
}
return pairs
}

const reverse = (str) => {
  // write code for strings.reverse
function reversed(str) {
  let splitString = str.split("")
  let reverseArray = splitString.reverse();
  let together = reverseArray.join("")
  return together
}
}

module.exports = {
  split,
  pairs,
  reverse
}