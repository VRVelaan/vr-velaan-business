function calculate() {

    // User Inputs
    let tonRate = Number(document.getElementById("tonRate").value);
    let weight = Number(document.getElementById("weight").value);
    let desiredProfit = Number(document.getElementById("profit").value);

    if (tonRate <= 0 || weight <= 0) {
        alert("Please enter valid values.");
        return;
    }

    // ===========================
    // Fixed Business Values
    // ===========================

    const transportPerTon = 1100;
    const loadingPerTon = 450;
    const miscPerTon = 100;
    const dehuskingPerPiece = 1.15;
    const wastagePercent = 5;

    // ===========================
    // Calculations
    // ===========================

    let weightKg = weight / 1000;

    // Market value of one coconut
    let marketValue = (tonRate / 1000) * weightKg;

    // Sale value after 5% wastage
    let effectiveValue = marketValue * (1 - (wastagePercent / 100));

    // Expenses per coconut
    let transportCost = (transportPerTon / 1000) * weightKg;
    let loadingCost = (loadingPerTon / 1000) * weightKg;
    let miscCost = (miscPerTon / 1000) * weightKg;
    let labourCost = dehuskingPerPiece;

    // Total expenses
    let totalExpense =
        transportCost +
        loadingCost +
        miscCost +
        labourCost;

    // Profit required per coconut
    let profitCost =
        (desiredProfit / 1000) * weightKg;

    // Recommended buying price
    let buyPrice =
        effectiveValue -
        totalExpense -
        profitCost;

    // Never show negative buying price
    if (buyPrice < 0) {
        buyPrice = 0;
    }

    // ===========================
    // Display Results
    // ===========================

    document.getElementById("marketValue").innerHTML =
        "₹" + marketValue.toFixed(2);

    document.getElementById("effectiveValue").innerHTML =
        "₹" + effectiveValue.toFixed(2);

    document.getElementById("transportCost").innerHTML =
        "₹" + transportCost.toFixed(2);

    document.getElementById("loadingCost").innerHTML =
        "₹" + loadingCost.toFixed(2);

    document.getElementById("miscCost").innerHTML =
        "₹" + miscCost.toFixed(2);

    document.getElementById("labourCost").innerHTML =
        "₹" + labourCost.toFixed(2);

    document.getElementById("totalExpense").innerHTML =
        "₹" + totalExpense.toFixed(2);

    document.getElementById("profitCost").innerHTML =
        "₹" + profitCost.toFixed(2);

    document.getElementById("buyPrice").innerHTML =
        "₹" + buyPrice.toFixed(2);

    // Decision

    let decision = "";

    if (buyPrice >= 16) {
        decision = "🟢 BUY BELOW ₹" + buyPrice.toFixed(2);
    }
    else if (buyPrice >= 15) {
        decision = "🟡 NEGOTIATE AROUND ₹" + buyPrice.toFixed(2);
    }
    else {
        decision = "🔴 BUY ONLY BELOW ₹" + buyPrice.toFixed(2);
    }

    document.getElementById("decision").innerHTML = decision;

}
