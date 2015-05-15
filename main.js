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

//create blank arrays
var gbpName = [];
var gbpPrice = [];

//find the item name and price that matches "GBP"
items.filter(function(item) {
  if (item.currency_code === "GBP") {
    gbpName.push(item.title);
    gbpPrice.push(item.price);
}
});

//Drop answer3 into DOM node
var answer3 = document.querySelector('#answer3');
answer3.innerText = '';
gbpName.forEach(function(gbpName) {
  answer3.appendChild(document.createTextNode(gbpName + " costs \u00A3" + gbpPrice));
})


//Question 4

//create blank array
var woodList = [];

//find items made of wood
items.filter(function(item) {
  item.materials.forEach(function(item2) {
    if (item2 === "wood") {
    woodList.push(item.title)
  }
});
});

//Drop answer 4 into DOM node
var answer4 = document.querySelector('#answer4');
answer4.innerText = '';
woodList.forEach(function(woodList) {
  answer4.appendChild(document.createTextNode(woodList + '\n' + '\n'));
})

//Question 5

//create blank arrays
var materials1 = [];
var materials2 = [];

//find the items with materials lengths greater than or equal to 8.
//Assign the titles to materials1
//Assign the materials lists to materials2
items.filter(function(item) {
    if (item.materials.length >= 8) {
      materials1.push(item.title);
      materials2.push(item.materials);
      }
  });

//Drop answer 5 into DOM node
var answer5 = document.querySelector('#answer5');
answer5.innerText = '';
materials1.forEach(function(materials1) {
answer5.appendChild(document.createTextNode(materials1 + '\n' + materials2 + '\n' + materials2));
  });









// for (i=0;i<materials1.length;i++) {
//   document.createTextNode(materials1[i] + "< br >");
// }





