//Question 1

//Get all prices
var allPrices = items.map(function(item) {
  return item.price;
});

//Get the sum
var sum = allPrices.reduce(function(previous, current) {
  return previous + current;
});

//Get the average
var avg = sum / allPrices.length;

//Answer
var answer = avg.toFixed(2);

//Drop answer in DOM node
document.querySelector('#answer1').textContent = "The average price is $" + answer;

//Question 2

//create a blank array
var itemTitles = [];

//find and filter the prices and assign to my array
items.filter(function(item) {
  if (item.price > 14.00 && item.price < 18.00) {
    itemTitles.push(item.title);
  };
});

//Drop answer2 into DOM node
var answer2 = document.querySelector('#answer2');
answer2.innerText = '';
itemTitles.forEach(function(itemTitles){
  answer2.appendChild(document.createTextNode(itemTitles + '\n'));
});


//Question 3

var gbpName = [];
var gbpPrice = [];

items.filter(function(item) {
  if (item.currency_code === "GBP") {
    gbpName.push(item.title);
    gbpPrice.push(item.price);
}
});
console.log(gbpName);
console.log(gbpPrice);

var answer3 = document.querySelector('#answer3');
answer3.innerText = '';
gbpName.forEach(function(gbpName) {
  answer3.appendChild(document.createTextNode(gbpName + " costs \u00A3" + gbpPrice));
})










