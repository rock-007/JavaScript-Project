
////////////////////?










   
 const array17 = [1, 2, 3, 4];

function Evenodd(acc, element) {
  if (element % 2 == 0) return `${acc}is even`;
  else if (element % 3 == 0 && element % 2 != 0) return `${acc}is odd`;
};



console.log(array17.reduce(Evenodd, " "))