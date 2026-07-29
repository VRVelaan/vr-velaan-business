function calculate(){

    let tonRate = Number(document.getElementById("tonRate").value);
    let weight = Number(document.getElementById("weight").value);
    let desiredProfit = Number(document.getElementById("profit").value);

    if(tonRate<=0 || weight<=0){
        alert("Enter valid values");
        return;
    }

    // Fixed Business Values
    const transportPerTon = 1100;
    const loadingPerTon = 450;
    const miscPerTon = 100;
    const dehuskingPerPiece = 1.15;
    const wastage = 5; // %

    let weightKg = weight / 1000;

    // Market value per coconut
    let marketValue = (tonRate / 1000) * weightKg;

    // Effective sale value after wastage
    let effectiveValue = marketValue * ((100 - wastage) / 100);

    // Expenses per coconut
    let transportCost = (transportPerTon / 1000) * weightKg;
    let loadingCost = (loadingPerTon / 1000) * weightKg;
    let miscCost = (miscPerTon / 1000) * weightKg;
    let labourCost = dehuskingPerPiece;

    // Profit per coconut
    let profitCost = (desiredProfit / 1000) * weightKg;

    // Recommended buying price
    let buyPrice = effectiveValue
                    - transportCost
                    - loadingCost
                    - miscCost
                    - labourCost
                    - profitCost;

    // Display
    document.getElementById("marketValue").innerHTML = "₹" + marketValue.toFixed(2);
    document.getElementById("effectiveValue").innerHTML = "₹" + effectiveValue.toFixed(2);
    document.getElementById("transportCost").innerHTML = "₹" + transportCost.toFixed(2);
    document.getElementById("loadingCost").innerHTML = "₹" + loadingCost.toFixed(2);
    document.getElementById("miscCost").innerHTML = "₹" + miscCost.toFixed(2);
    document.getElementById("labourCost").innerHTML = "₹" + labourCost.toFixed(2);
    document.getElementById("profitCost").innerHTML = "₹" + profitCost.toFixed(2);
    document.getElementById("buyPrice").innerHTML = "₹" + buyPrice.toFixed(2);

}
