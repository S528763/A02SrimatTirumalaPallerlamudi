function clearfields(){
	document.getElementById("myform").reset();
}

function bank2(){
	window.open("bank2.html","_self");
}

function bank(){
	window.open("bank.html","_self");
}

function details(){
	alert("Your Payment is successful. Thankyou for banking with us.\n\nYou will be redirected to the Funds Transfer page!");
	window.location = "bank.html","_self";
}
