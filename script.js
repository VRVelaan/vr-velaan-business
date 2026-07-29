alert("script.js loaded");

function calculate() {
    alert("Calculate clicked");

    let tonRate = Number(document.getElementById("tonRate").value);
    let weight = Number(document.getElementById("weight").value);

    let kgRate = tonRate / 1000;
    let pieceRate = kgRate * weight / 1000;

    document.getElementById("kgRate").innerHTML = "₹" + kgRate.toFixed(2);
    document.getElementById("pieceRate").innerHTML = "₹" + pieceRate.toFixed(2);
}
