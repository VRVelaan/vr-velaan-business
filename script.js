function calculate(){

let tonRate = Number(document.getElementById("tonRate").value);
let weight = Number(document.getElementById("weight").value);

if(tonRate<=0 || weight<=0){
alert("Enter valid values");
return;
}

const transportPerTon = 1100;
const loadingPerTon = 450;
const miscPerTon = 100;
const dehuskingPerPiece = 1.15;

let weightKg = weight/1000;

//Market value
let marketValue = (tonRate/1000) * weightKg;

//Expenses per coconut
let transportCost = (transportPerTon/1000) * weightKg;
let loadingCost = (loadingPerTon/1000) * weightKg;
let miscCost = (miscPerTon/1000) * weightKg;
let labourCost = dehuskingPerPiece;

//Maximum buying price
let buyingPrice = marketValue
                - transportCost
                - loadingCost
                - miscCost
                - labourCost;

document.getElementById("marketValue").innerHTML="₹"+marketValue.toFixed(2);

document.getElementById("transportCost").innerHTML="₹"+transportCost.toFixed(2);

document.getElementById("loadingCost").innerHTML="₹"+loadingCost.toFixed(2);

document.getElementById("miscCost").innerHTML="₹"+miscCost.toFixed(2);

document.getElementById("labourCost").innerHTML="₹"+labourCost.toFixed(2);

document.getElementById("buyPrice").innerHTML="₹"+buyingPrice.toFixed(2);

}
