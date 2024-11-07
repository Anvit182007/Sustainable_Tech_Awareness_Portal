document.getElementById("calculateBtn").addEventListener("click", function () {
    // Fetch values from inputs
    const electricity = parseFloat(document.getElementById("electricity").value) || 0;
    const lpg = parseFloat(document.getElementById("lpg").value) || 0;
    const publicTransport = parseFloat(document.getElementById("publicTransport").value) || 0;
    const carMileage = parseFloat(document.getElementById("carMileage").value) || 0;
    const domesticFlights = parseInt(document.getElementById("domesticFlights").value) || 0;
    const internationalFlights = parseInt(document.getElementById("internationalFlights").value) || 0;

    // Check for recycling options
    const recyclesNewspaper = document.getElementById("recycleNewspaper").checked;
    const recyclesAluminum = document.getElementById("recycleAluminum").checked;

    // Calculate each part of the carbon footprint
    const electricityImpact = electricity * 0.92; // kg CO2 per kWh in India
    const lpgImpact = lpg * 2.983; // kg CO2 per kg of LPG
    const publicTransportImpact = publicTransport * 0.05; // kg CO2 per km for buses/trains
    const carMileageImpact = carMileage * 0.2; // kg CO2 per km for an average car
    const domesticFlightImpact = domesticFlights * 1120; // kg CO2 per domestic flight
    const internationalFlightImpact = internationalFlights * 5000; // kg CO2 per international flight

    // Add extra footprint if the user does not recycle
    const newspaperImpact = recyclesNewspaper ? 0 : 184; // kg CO2 added if not recycling newspapers
    const aluminumImpact = recyclesAluminum ? 0 : 166; // kg CO2 added if not recycling aluminum and tin

    // Total footprint
    const totalFootprint = electricityImpact + lpgImpact + publicTransportImpact + carMileageImpact +
                           domesticFlightImpact + internationalFlightImpact + newspaperImpact + aluminumImpact;

    // Display the results
    document.getElementById("footprintResult").innerText = `Your estimated carbon footprint is ${totalFootprint.toFixed(2)} kg CO2 per year.`;
    
    // Rating and Suggestions
    let rating = "";
    if (totalFootprint < 3000) {
        rating = "Your carbon footprint is very low. Great job!";
    } else if (totalFootprint < 6000) {
        rating = "Your carbon footprint is average. Try making small changes to reduce it further.";
    } else {
        rating = "Your carbon footprint is above average. Consider adopting more sustainable practices!";
    }

    document.getElementById("footprintRating").innerText = rating;
    document.getElementById("results").style.display = "block";
});
