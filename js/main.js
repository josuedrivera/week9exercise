var cities = ["San Francisco", "San Diego", "Oakland", "Los Angeles", "Sacramento"];

console.log(cities);

for (var i = 0; i < cities.length; i++) {
  console.log(cities[i].length);
};


var copyCities = [];
for(var i = 0; i < cities.length; i++) {
	copyCities.push(cities[i]);
};

// copyCities.reverse();
// console.log(copyCities);

copyCities.sort();
console.log(copyCities);

var numbers = [23, 80, 16, 87, 81];

numbers.sort(function(a, b){return a-b}); 
console.log(numbers);

numbers.sort(function(a, b){return b-a});
console.log(numbers);

var baySlang = ["hella", "bootsy", "janky"];


baySlang.push("on mamas", "pop yo collar");
console.log(baySlang);


baySlang.shift();
console.log(baySlang);
console.log(baySlang.length);