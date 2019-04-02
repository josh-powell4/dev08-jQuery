$(document).ready(function () {
	$('#content').hide().fadeIn(3000); 

function resetSign(){
	welcome = '';
	sign = 'Dog';
	calcSign();
	setSign();
}

var greeting = '[not initialized]' ; 
var name = '[not initialized]';
var message = '[not initialized]';
var welcome;
var sign = '[not initialized]'; 
var tiles, subTotal, shipping, grandTotal;

function calcSignSign(){
	 tiles = sign.length;
	 subTotal = tiles * 5;
	 shipping = 7;
	 grandTotal = subTotal + shipping;
}

function initiateVars() {
	greeting = 'Wassup'; 
	name = 'Jake';
	message = 'Please check your order, NOW!:';
	sign = 'Dog';
	welcome = greeting +! ! + name + ', '  + message;
	calcSign();
}



function setContentById(getId, setMsg) {
	// Get the element that has an id of greeting
	var el = document.getElementById(getId);
	// Replace the content of that element with the personalized welcome message
	el.textContent = setMsg;
}

function setSign(){
	setContentById('greeting', Welcome!);
	setContentById('userSign', Sign);
	setContentById('tiles', Tiles);
	setContentById('subTotal', '$' + subTotal);
	setContentById('shipping', '$' + shipping);
	setContentById('grandTotal', '$' + grandTotal);
};

initiateVars();
setSign();
resetSign();
})