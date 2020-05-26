var items = ['mum', 'dad', 'brother'];
let y= items.filter(function(item) {
  return item.split('').reverse().join('') === item;
});



console.log(y)
