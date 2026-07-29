function calculate() {

    // ===========================
    // USER INPUTS
    // ===========================

    const tonRate = Number(document.getElementById("tonRate").value);
    const weight = Number(document.getElementById("weight").value);
    const desiredProfit = Number(document.getElementById("profit").value);
    const askingPrice = Number(document.getElementById("askingPrice").value);

    if (tonRate <= 0 || weight <= 0) {
        alert("Please enter valid values.");
        return;
    }

    // ===========================
    // FIXED BUSINESS VALUES
    // ===========================

    const transportPerTon = 1100;
    const loadingPerTon = 450;
    const miscPerTon = 100;
    const dehuskingPerPiece = 1.15;
    const wastagePercent = 5;

    // ===========================
    // BASIC CALCULATIONS
    // ===========================

    const weightKg = weight / 1000;

    const marketValue =
        (tonRate / 1000) * weightKg;

    const effectiveValue =
        marketValue * (1 - wastagePercent / 100);

    const transportCost =
        (transportPerTon / 1000) * weightKg;

    const loadingCost =
        (loadingPerTon / 1000) * weightKg;

    const miscCost =
        (miscPerTon / 1000) * weightKg;

    const labourCost =
        dehuskingPerPiece;

    const totalExpense =
        transportCost +
        loadingCost +
        miscCost +
        labourCost;

    const profitCost =
        (desiredProfit / 1000) * weightKg;

    let buyPrice =
        effectiveValue -
        totalExpense -
        profitCost;

    if (buyPrice < 0) {
        buyPrice = 0;
    }

    // ===========================
    // DISPLAY RESULTS
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
        // ===========================
    // NEGOTIATION CALCULATION
    // ===========================

    if (askingPrice > 0) {

        const actualProfitPerPiece =
            effectiveValue -
            totalExpense -
            askingPrice;

        const coconutsPerTon =
            1000 / weightKg;

        const actualProfitPerTon =
            actualProfitPerPiece * coconutsPerTon;

        const difference =
            askingPrice - buyPrice;

        document.getElementById("farmerPrice").innerHTML =
            "₹" + askingPrice.toFixed(2);

        if (actualProfitPerTon >= 0) {

            document.getElementById("actualProfit").innerHTML =
                "₹" + actualProfitPerTon.toFixed(0);

        } else {

            document.getElementById("actualProfit").innerHTML =
                "-₹" + Math.abs(actualProfitPerTon).toFixed(0);

        }

        let decision = "";

        if (askingPrice <= buyPrice) {

            decision =
                "🟢 <b>BUY</b><br><br>" +
                "Farmer Asking : ₹" + askingPrice.toFixed(2) + "<br>" +
                "Recommended Buying Price : ₹" + buyPrice.toFixed(2) + "<br>" +
                "Expected Profit : ₹" + actualProfitPerTon.toFixed(0) + " / Ton<br><br>" +
                "✅ Good purchase. You will achieve your target profit.";

        }
        else if (actualProfitPerTon > 0) {

            let suggestedOffer = buyPrice - 0.30;

            if (suggestedOffer < 0) {
                suggestedOffer = 0;
            }

            decision =
                "🟡 <b>NEGOTIATE</b><br><br>" +
                "Farmer Asking : ₹" + askingPrice.toFixed(2) + "<br>" +
                "Start Negotiation : <b>₹" + suggestedOffer.toFixed(2) + "</b><br>" +
                "Target Settlement : <b>₹" + buyPrice.toFixed(2) + "</b><br>" +
                "Reduce by : <b>₹" + difference.toFixed(2) + "</b> per coconut<br><br>" +
                "Expected Profit : <b>₹" + actualProfitPerTon.toFixed(0) + " / Ton</b>";

        }
        else {

            let suggestedOffer = buyPrice - 0.30;

            if (suggestedOffer < 0) {
                suggestedOffer = 0;
            }

            decision =
                "🔴 <b>DON'T BUY</b><br><br>" +
                "Farmer Asking : ₹" + askingPrice.toFixed(2) + "<br>" +
                "Maximum Safe Price : <b>₹" + buyPrice.toFixed(2) + "</b><br>" +
                "Reduce by : <b>₹" + difference.toFixed(2) + "</b> per coconut<br><br>" +
                "Expected Loss : <b>₹" + Math.abs(actualProfitPerTon).toFixed(0) + " / Ton</b>";

        }

        document.getElementById("decision").innerHTML = decision;

    }
        else {

        document.getElementById("farmerPrice").innerHTML = "-";
        document.getElementById("actualProfit").innerHTML = "-";

        document.getElementById("decision").innerHTML =
            "Enter the farmer's asking price to get a negotiation recommendation.";

    }

    // ===========================
    // NEGOTIATION GUIDE
    // ===========================

    let startOffer = buyPrice - 0.30;

    if (startOffer < 0) {
        startOffer = 0;
    }

    // Update Negotiation Guide Cards
    if (document.getElementById("startOffer")) {
        document.getElementById("startOffer").innerHTML =
            "₹" + startOffer.toFixed(2);
    }

    if (document.getElementById("counterOffer")) {
        document.getElementById("counterOffer").innerHTML =
            "₹" + buyPrice.toFixed(2);
    }

    if (document.getElementById("maxPrice")) {
        document.getElementById("maxPrice").innerHTML =
            "₹" + buyPrice.toFixed(2);
    }

    // Append Negotiation Guide to Decision Box
    document.getElementById("decision").innerHTML +=
        "<hr>" +
        "<b>Negotiation Guide</b><br><br>" +
        "💬 Start From : <b>₹" + startOffer.toFixed(2) + "</b><br>" +
        "🎯 Target Settlement : <b>₹" + buyPrice.toFixed(2) + "</b><br>" +
        "🚫 Never Pay Above : <b>₹" + buyPrice.toFixed(2) + "</b><br><br>" +
        "✔️ Paying below this price increases your profit.<br>" +
        "❌ Paying above this price reduces your target profit.";

}
