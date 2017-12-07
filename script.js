alert("We are happy to see you here!");
console.log("Please, don`t see it");
var meetproducts = "bloodsausage";
var jam = "conesjam";
var person = prompt("Please enter your name");
alert("Hey " +person+"! Only today we have special offer for "+meetproducts+" and "+jam+"!");	
var jamprice = 15
console.log("Our "+jam+" costs "+jamprice+". It`s so tasty!")
var quantity = prompt("Our sweet "+person+" How many of "+jam+" do you want to buy?")
var totalcost = quantity*jamprice
prompt("Great, that will cost you "+totalcost+" dollars.")
var productArray = ["rosejam", "conesjam", "malinajam"];
productArray[0] = "spicyjam";
productArray.push("alcojam");
console.log("We have different jam: "+productArray+"")

var bloods = {
  name: "Blood sausage",
  price: 20,
  currency: "$",
  quantity: 17,
};
bloods.description =
"Very delicious taste! (from Kosh-Agach)"
console.log(bloods)

var conesjam = {
  name: "Jam from cones",
  price: 15,
  currency: "$",
  quantity: 9,
};
conesjam.description =
"Top-organic product without sugar (from Ulagan)"
console.log(conesjam)

var whip = {
  name: "Shepherd`s whip",
  price: 107,
  currency: "$",
  quantity: 4,
};
whip.description =
"Natural skin! Show your power! (from Maima)"
console.log(whip)

var productlist=[bloods, conesjam, whip]
console.log(productlist[1])

function printProducts(productlist) {
	for (i = 0; i < productlist.length; i++) {
  console.log(productlist[i])
	}
}

printProducts(productlist);

var websiteTitle = $("h1");
console.log(websiteTitle)


$(function(){
var websiteTitle = $("h1").text(); 
console.log(websiteTitle)
})


