function initBMICalculator() {
    
    var inputFieldWeight = document.getElementById("input_field_weight").addEventListener("keyup", calculate);
	//input_field_height.addEventListener("keyup", calculate);
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
	
	//var height = getHeight();
	//var weight = getWeight();
	
	//var calculation = weight/(height*height);
	
	updateResultContainer(11);
}

function updateResultContainer(calculation){
	var bmiResult = document.getElementById("bmi_result_container");
	bmiResult.innerHTML = calculation;
	
	var result_text = document.getElementById("bmi_result_text");
	//result_text_ref.innerHTML = "Hallo";

}
