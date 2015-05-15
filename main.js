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

//Grab answer 5 and clear it
var answer5 = document.querySelector('#answer5');
answer5.innerText = '';

//create a filteredItems object and put filtered items in it
var filteredItems = items.filter(function(item) {
  return item.materials.length >= 8;
})

//run a for each on filteredItems and create variables for titles, materials lenths and materials
//Put the titles and number of materials in answer 5
filteredItems.forEach(function(item) {
  var title = item.title;
  var materials = item.materials;
  var length = materials.length;
  answer5.appendChild(document.createTextNode(item.title + " has " + length + " materials\n\n"));

//run a forEach on materials array and put them in answer 5
  materials.forEach(function(material) {
    answer5.appendChild(document.createTextNode(material + '\n'));
  })

  //put spaces in answer 5
  answer5.appendChild(document.createTextNode('\n'));
})





