// calculate and validate
function calculatebmi(){
    // form input
    let weight = parseFloat(document.getElementById("weight").value);
    let age = parseInt(document.getElementById("age").value);
    let height = parseFloat(document.getElementById("height").value);
    
    // validation
    if (isNaN(weight) || isNaN(age) || isNaN(height)) {
        alert("Please enter valid numbers for weight, age, and height.");
        return;
    }
    
    // convert height from cm to m
    const heightMeters = height / 100

    // BMI calculation
    const bmi = weight / (heightMeters * heightMeters);

    // results BMI
    const resultBmi = Math.round(bmi*10) / 10;
    
    // BMI classification
    let classification;
    let conlusion;
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
    let result = document.getElementById("result-text")
    result.innerHTML = `
    <p style="text-align: center;">${classification}</p>
    <h1 style="text-align: center;"> ${resultBmi}</h1>
    <p style="text-align: center;">${conlusion}</p>
    `
}

// reset button
function reset() {
    // form input
    document.getElementById('input[name="gender"]:checked').checked = false;
    document.getElementById("weight").value = "";
    document.getElementById("age").value = "";
    document.getElementById("height").value = "";
    
    // results
    document.getElementById("result-text").innerHTML = "0";
}