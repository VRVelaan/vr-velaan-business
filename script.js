function calculate(){

let tonRate = parseFloat(document.getElementById("tonRate").value);
let weight = parseFloat(document.getElementById("weight").value);

if(isNaN(tonRate) || isNaN(weight)){
alert("Please enter all values");
return;
}

let kgRate = tonRate / 1000;

let pieceRate = kgRate * (weight / 1000);

document.getElementById("kgRate").innerHTML =
"₹ " + kgRate.toFixed(2);

document.getElementById("pieceRate").innerHTML =
"₹ " + pieceRate.toFixed(2);

}
