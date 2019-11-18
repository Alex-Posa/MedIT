function initBMICalculator() {
    
    var inputFieldWeight = document.getElementById("input_field_weight").addEventListener("keyup", calculate);
}


function getWeight(){
	
	var weight = document.getElementById("input_field_weight");
	var weightInput = weight.value;
	
	return weightInput;
}

function getHeight(){
	
	var height = document.getElementById("input_field_height");
	var heightInput = height.value;
	
	return heightInput;
}


function calculate(){
	
	var height = getHeight();
	var weight = getWeight();
	
	var calculation = weight/((height*height)/10000);
	var cal = calculation.toFixed(2);
	updateResultContainer(cal);
}

function updateResultContainer(cal){
	var bmiResult = document.getElementById("bmi_result_value");
	bmiResult.innerHTML = cal;
	
	var result_text = document.getElementById("bmi_result_text");
	
	if(bmiResult.innerHTML < 18.5){
		result_text.innerHTML = "Untergewicht";
		document.getElementById("bmi_result_text").style.color = "yellow";
	}
	if(bmiResult.innerHTML >= 18.5 && bmiResult.innerHTML < 25){
		result_text.innerHTML = "Normalgewicht";
		document.getElementById("bmi_result_text").style.color = "green";
	}
	if(bmiResult.innerHTML > 25){
		result_text.innerHTML = "Übergewicht";
		document.getElementById("bmi_result_text").style.color = "red";
	}
	if(bmiResult.innerHTML > 50 || bmiResult.innerHTML < 1){
		result_text.innerHTML = "Super ungesundes Gewicht!";
		document.getElementById("bmi_result_text").style.color = "pink";
	}
}
