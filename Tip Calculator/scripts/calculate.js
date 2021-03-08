function calcTip() {
	//var subtotalElem = 
	//var tipElem = 
	var totalElem = document.getElementById('total');
    var tipElem = document.getElementById('totaltip');

	var subtotal = document.getElementById('subtotal').value;
	var tip = document.getElementById('tip').value;
    var totalTip = Number (subtotal)*Number (tip/100);
	var total = Number(subtotal) + totalTip;
	totalElem.innerHTML = '$' + total;
    tipElem.innerHTML = '$' + totalTip;
}