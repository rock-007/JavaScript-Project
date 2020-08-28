////////////////////?

const array17 = [1, 2, 3, 4];

function Evenodd(acc, element) {
  if (element % 2 == 0) return `${acc}is even1`;
  else if (element % 3 == 0 && element % 2 != 0) {
    return `${acc}is odd2`;
  } else if (element   == 1) {
    return `${acc}is odd2x \n`;
  }
}

console.log(array17.reduce(Evenodd, "hello"));
