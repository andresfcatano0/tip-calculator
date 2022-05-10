
let button = document.querySelector("button");
let bill = document.querySelector("#bill");
let tip = document.querySelector("#tip");
let people = document.querySelector("#people");
let totalTip = document.querySelector("#totalTip");
let totalBill = document.querySelector("#totalBill");
let split = document.querySelector("#split");

function calculateTip(){
	if (Number(people.value) == 0){
		totalTip.innerHTML = Number(bill.value) * (Number(tip.value) * .01);
		totalBill.innerHTML = Number(bill.value) * (Number(tip.value) * .01) + Number(bill.value);
		return false;
	} else {
		totalTip.innerHTML = Number(bill.value) * (Number(tip.value) * .01);
		totalBill.innerHTML = Number(bill.value) * (Number(tip.value) * .01) + Number(bill.value);
		split.innerHTML = people.value + " people pay $" + totalBill.innerHTML / people.value + " each"; 
		return false;
	}
}

button.addEventListener("click", function(){
	calculateTip();
})

