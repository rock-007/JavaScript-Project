////////////////////?

const array1 = [1, 2, 3, 4];

function Evenodd(acc, element) {
  if (element % 2 == 0) return `${acc}is even \n`;
  else if (element % 3 == 0 && element % 2 != 0) {
    return `${acc}is odd \n`;
  } else if (element == 1) {
    return `${acc}is odd \n`;
  }
}

console.log(array1.reduce(Evenodd, "hello"));
