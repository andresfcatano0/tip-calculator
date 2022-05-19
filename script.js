
let button = document.querySelector("button");
let bill = document.querySelector("#bill");
let tip = document.querySelector("#tip");
let people = document.querySelector("#people");
let totalTip = document.querySelector("#totalTip");
let totalBill = document.querySelector("#totalBill");
let split = document.querySelector("#split");

function billCalculation(){
	totalTip.innerHTML = Number(bill.value) * (Number(tip.value) * .01);
	totalBill.innerHTML = Number(bill.value) * (Number(tip.value) * .01) + Number(bill.value);
}

function splitCalculation(){
	split.innerHTML = people.value + " people pay $" + Math.round(totalBill.innerHTML / people.value) + " each";
}

function calculateTotals(){
	if (Number(people.value) == 0){
		billCalculation();
		split.innerHTML = "";
		return false;
	} else if (Number(people.value) == 1) {
		billCalculation();
		split.innerHTML = "One person pays $" + Math.round(totalBill.innerHTML / people.value);
		return false;
	} else {
		billCalculation();
		splitCalculation();
		return false;
	}
}

button.addEventListener("click", function(){
	if ((tip.value !== NaN && tip.value > 0) && 
		(bill.value !== NaN && bill.value > 0) && 
		(people.value !== NaN && people.value > 0)){
			calculateTotals();
	} else {
 		split.innerHTML = "";
 		totalTip.innerHTML = "0";
 		totalBill.innerHTML = "0";
 		alert("Please enter positve numbers in all fields");
 	}
})


