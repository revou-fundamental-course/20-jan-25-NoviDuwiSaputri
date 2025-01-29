// reset button
document.getElementById("resetBtn").addEventListener("click", function() {
    // form input
    document.getElementById('input[name="gender"]:checked').checked = false;
    document.getElementById("weight").value = "";
    document.getElementById("age").value = "";
    document.getElementById("height").value = "";

    // results 
    document.getElementById("resultText").innerHTML = "Masukkan data untuk menghitung BMI Anda.";
});

// calculate button
document.getElementById("calculateBmi").addEventListener("click", function() {
    // form input
    var weight = parseFloat(document.getElementById("weight").value);
    var age = parseInt(document.getElementById("age").value);
    var height = parseFloat(document.getElementById("height").value);
    
    // validation
    if (isNaN(weight) || isNaN(age) || isNaN(height)) {
        alert("Please enter valid numbers for weight, age, and height.");
        return;
    }
    
    // convert height from cm to m
    var heightMeters = height / 100
    
    // BMI calculation
    var bmi = weight / (heightMeters * heightMeters);

    // results BMI
    var resultBmi = Math.round(bmi*10) / 10;
    
    // BMI classification
    var classification;
    var conlusion;
    if (bmi < 18.5) {
        classification = "Kekurangan Berat Badan";
        conlusion = "Anda memiliki berat badan kurang";
    } else if (bmi < 25) {
        classification = "Berat Badan Normal (Ideal)";
        conlusion = "Anda memiliki berat badan ideal";
    } else if (bmi < 30) {
        classification = "Kelebihan Berat Badan";
        conlusion = "Anda memiliki kelbihan berat badan";
    } else {
        classification = "Kegemukan atau Obesitas";
        conlusion = "Anda kegemukan atau obesitas";
    }
    
    // display results
    var result = document.getElementById("resultText")
    result.innerHTML = `
    <p style="text-align: center;">${classification}</p>
    <h1 style="text-align: center;"> ${resultBmi}</h1>
    <p style="text-align: center;">${conlusion}</p>
    `
});