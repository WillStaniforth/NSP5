window.onload = function() {
	var TotalCost = parseInt(0);
	var Venue1 = parseInt(0);
	var Venue2 = parseInt(0);
	var Venue3 = parseInt(0);
	var Venue4 = parseInt(0);
	var Venue5 = parseInt(0);
	var Venue6 = parseInt(0);
	var Venue7 = parseInt(0);
	var Venue8 = parseInt(0);
	var Venue9 = parseInt(0);
	console.log(localStorage.getItem("Money"))
	console.log(TotalCost)
	
	init();
}
function init(){
	if(localStorage && localStorage.getItem('Money')){
	TotalCost = parseInt(localStorage.getItem('Money'));
	}else{
	TotalCost = parseInt(0);
	localStorage.setItem('Money', parseInt(TotalCost));
	}
	
	if(localStorage && localStorage.getItem('FillmoreCar')){
	Venue1 = parseInt(localStorage.getItem("FillmoreCar")) / 31;
	var Temp = TotalCost;
	TotalCost = Venue1 + Temp;
	}else{
	localStorage.setItem("FillmoreCar", parseInt(0));
	}
	
	if(localStorage && localStorage.getItem('Tabernacle')){
	Venue2 = parseInt(localStorage.getItem("Tabernacle")) / 30;
	var Temp = TotalCost;
	TotalCost = Venue2 + Temp;
	}else{
	localStorage.setItem("Tabernacle", parseInt(0));
	}
	
	if(localStorage && localStorage.getItem('HardRockLive')){
	Venue3 = parseInt(localStorage.getItem("HardRockLive")) / 26;
	var Temp = TotalCost;
	TotalCost = Venue3 + Temp;
	}else{
	localStorage.setItem("HardRockLive", parseInt(0));
	}
	
	if(localStorage && localStorage.getItem('Rebel')){
	Venue4 = parseInt(localStorage.getItem("Rebel")) / 34;
	var Temp = TotalCost;
	TotalCost + Venue4 + Temp;
	}else{
	localStorage.setItem("Rebel", parseInt(0));
	}
	
	if(localStorage && localStorage.getItem('HouseOfBlues')){
	Venue5 = parseInt(localStorage.getItem("HouseOfBlues")) / 25;
	var Temp = TotalCost;
	TotalCost = Venue5 + Temp;
	}else{
	localStorage.setItem("HouseOfBlues", parseInt(0));
	}
	
	if(localStorage && localStorage.getItem('ElectricFactory')){
	Venue6 = parseInt(localStorage.getItem("ElectricFactory")) / 28;
	var Temp = TotalCost;
	TotalCost = Venue6 + Temp;
	}else{
	localStorage.setItem("ElectricFactory", parseInt(0));
	}
	
	if(localStorage && localStorage.getItem('FillmoreDen')){
	Venue7 = parseInt(localStorage.getItem("FillmoreDen")) / 34;
	var Temp = TotalCost;
	TotalCost = Venue7 + Temp;
	}else{
	localStorage.setItem("FillmoreDen", parseInt(0));
	}
	
	if(localStorage && localStorage.getItem('Paramount')){
	Venue8 = parseInt(localStorage.getItem("Paramount")) / 26;
	var Temp = TotalCost;
	TotalCost = Venue8 + Temp;
	}else{
	localStorage.setItem("Paramount", parseInt(0));
	}
	
	if(localStorage && localStorage.getItem('Masonic')){
	Venue9 = parseInt(localStorage.getItem("Masonic")) / 32;
	var Temp = TotalCost;
	TotalCost = Venue9 + Temp;
	}else{
	localStorage.setItem("Masonic", parseInt(0));	
	}
	
	localStorage.setItem('Money', TotalCost);
	TotalCost = parseInt(localStorage.getItem("FillmoreCar")) + parseInt(localStorage.getItem("Tabernacle")) + parseInt(localStorage.getItem("HardRockLive")) + parseInt(localStorage.getItem("Rebel")) + parseInt(localStorage.getItem("HouseOfBlues")) + parseInt(localStorage.getItem("ElectricFactory")) + parseInt(localStorage.getItem("FillmoreDen")) + parseInt(localStorage.getItem("Paramount")) + parseInt(localStorage.getItem("Masonic"));
	document.getElementById('CostOutput').innerHTML = TotalCost;
	document.getElementById('No1').innerHTML = Venue1;
	document.getElementById('No2').innerHTML = Venue2;
	document.getElementById('No3').innerHTML = Venue3;
	document.getElementById('No4').innerHTML = Venue4;
	document.getElementById('No5').innerHTML = Venue5;
	document.getElementById('No6').innerHTML = Venue6;
	document.getElementById('No7').innerHTML = Venue7;
	document.getElementById('No8').innerHTML = Venue8;
	document.getElementById('No9').innerHTML = Venue9;
	var btn1 = document.getElementById("Button1");
	var btn2 = document.getElementById("Button2");
	var btn3 = document.getElementById("Button3");
	var btn4 = document.getElementById("Button4");
	var btn5 = document.getElementById("Button5");
	var btn6 = document.getElementById("Button6");
	var btn7 = document.getElementById("Button7");
	var btn8 = document.getElementById("Button8");
	var btn9 = document.getElementById("Button9");
	var btnclr = document.getElementById("ButtonClear");
	var btnbuy = document.getElementById("ButtonPurchase");
	btnclr.addEventListener("click", function() {
		console.log("Button Clear clicked")
		Venue1 = 0;
		Venue2 = 0;
		Venue3 = 0;
		Venue4 = 0;
		Venue5 = 0;
		Venue6 = 0;
		Venue7 = 0;
		Venue8 = 0;
		Venue9 = 0;
		TotalCost = 0;
		localStorage.setItem("FillmoreCar", parseInt(Venue1));
		localStorage.setItem("Tabernacle", parseInt(Venue2));
		localStorage.setItem("HardRockLive", parseInt(Venue3));
		localStorage.setItem("Rebel", parseInt(Venue4));
		localStorage.setItem("HouseOfBlues", parseInt(Venue5));
		localStorage.setItem("ElectricFactory", parseInt(Venue6));
		localStorage.setItem("FillmoreDen", parseInt(Venue7));
		localStorage.setItem("Paramount", parseInt(Venue8));
		localStorage.setItem("Masonic", parseInt(Venue9));
		localStorage.setItem("Money", parseInt(TotalCost));
		document.getElementById('CostOutput').innerHTML = parseInt(TotalCost);
		document.getElementById('No1').innerHTML = Venue1;
		document.getElementById('No2').innerHTML = Venue2;
		document.getElementById('No3').innerHTML = Venue3;
		document.getElementById('No4').innerHTML = Venue4;
		document.getElementById('No5').innerHTML = Venue5;
		document.getElementById('No6').innerHTML = Venue6;
		document.getElementById('No7').innerHTML = Venue7;
		document.getElementById('No8').innerHTML = Venue8;
		document.getElementById('No9').innerHTML = Venue9;
	})
	btnbuy.addEventListener("click", function() {
		console.log("Button Purchase clicked")
	})
	btn1.addEventListener("click", function() {
		console.log("Button 1 clicked")
		Venue1++;
		localStorage.setItem("FillmoreCar", parseInt(Venue1 * 31));
		console.log(parseInt(localStorage.getItem("FillmoreCar")));
		console.log(parseInt(localStorage.getItem("Money")));
		TotalCost = parseInt(localStorage.getItem("FillmoreCar")) + parseInt(localStorage.getItem("Tabernacle")) + parseInt(localStorage.getItem("HardRockLive")) + parseInt(localStorage.getItem("Rebel")) + parseInt(localStorage.getItem("HouseOfBlues")) + parseInt(localStorage.getItem("ElectricFactory")) + parseInt(localStorage.getItem("FillmoreDen")) + parseInt(localStorage.getItem("Paramount")) + parseInt(localStorage.getItem("Masonic"));
		document.getElementById('CostOutput').innerHTML = TotalCost;
		document.getElementById('No1').innerHTML = Venue1;
	})
	btn2.addEventListener("click", function() {
		console.log("Button 2 clicked")
		Venue2++;
		localStorage.setItem("Tabernacle", parseInt(Venue2 * 30));
		console.log(parseInt(localStorage.getItem("Tabernacle")));
		console.log(parseInt(localStorage.getItem("Money")));
		TotalCost = parseInt(localStorage.getItem("FillmoreCar")) + parseInt(localStorage.getItem("Tabernacle")) + parseInt(localStorage.getItem("HardRockLive")) + parseInt(localStorage.getItem("Rebel")) + parseInt(localStorage.getItem("HouseOfBlues")) + parseInt(localStorage.getItem("ElectricFactory")) + parseInt(localStorage.getItem("FillmoreDen")) + parseInt(localStorage.getItem("Paramount")) + parseInt(localStorage.getItem("Masonic"));
		document.getElementById('CostOutput').innerHTML = TotalCost;
		document.getElementById('No2').innerHTML = Venue2;
	})
	btn3.addEventListener("click", function() {
		console.log("Button 3 clicked")
		Venue3++;
		localStorage.setItem("HardRockLive", parseInt(Venue3 * 26));
		console.log(parseInt(localStorage.getItem("HardRockLive")));
		console.log(parseInt(localStorage.getItem("Money")));
		TotalCost = parseInt(localStorage.getItem("FillmoreCar")) + parseInt(localStorage.getItem("Tabernacle")) + parseInt(localStorage.getItem("HardRockLive")) + parseInt(localStorage.getItem("Rebel")) + parseInt(localStorage.getItem("HouseOfBlues")) + parseInt(localStorage.getItem("ElectricFactory")) + parseInt(localStorage.getItem("FillmoreDen")) + parseInt(localStorage.getItem("Paramount")) + parseInt(localStorage.getItem("Masonic"));
		document.getElementById('CostOutput').innerHTML = TotalCost;
		document.getElementById('No3').innerHTML = Venue3;
	})
	btn4.addEventListener("click", function() {
		console.log("Button 4 clicked")
		Venue4++;
		localStorage.setItem("Rebel", parseInt(Venue4 * 34));
		console.log(parseInt(localStorage.getItem("Rebel")));
		console.log(parseInt(localStorage.getItem("Money")));
		TotalCost = parseInt(localStorage.getItem("FillmoreCar")) + parseInt(localStorage.getItem("Tabernacle")) + parseInt(localStorage.getItem("HardRockLive")) + parseInt(localStorage.getItem("Rebel")) + parseInt(localStorage.getItem("HouseOfBlues")) + parseInt(localStorage.getItem("ElectricFactory")) + parseInt(localStorage.getItem("FillmoreDen")) + parseInt(localStorage.getItem("Paramount")) + parseInt(localStorage.getItem("Masonic"));
		document.getElementById('CostOutput').innerHTML = TotalCost;
		document.getElementById('No4').innerHTML = Venue4;
	})
	btn5.addEventListener("click", function() {
		console.log("Button 5 clicked")
		Venue5++;
		localStorage.setItem("HouseOfBlues", parseInt(Venue5 * 25));
		console.log(parseInt(localStorage.getItem("HouseOfBlues")));
		console.log(parseInt(localStorage.getItem("Money")));
		TotalCost = parseInt(localStorage.getItem("FillmoreCar")) + parseInt(localStorage.getItem("Tabernacle")) + parseInt(localStorage.getItem("HardRockLive")) + parseInt(localStorage.getItem("Rebel")) + parseInt(localStorage.getItem("HouseOfBlues")) + parseInt(localStorage.getItem("ElectricFactory")) + parseInt(localStorage.getItem("FillmoreDen")) + parseInt(localStorage.getItem("Paramount")) + parseInt(localStorage.getItem("Masonic"));
		document.getElementById('CostOutput').innerHTML = TotalCost;
		document.getElementById('No5').innerHTML = Venue5;
	})
	btn6.addEventListener("click", function() {
		console.log("Button 6 clicked")
		Venue6++;
		localStorage.setItem("ElectricFactory", parseInt(Venue6 * 28));
		console.log(parseInt(localStorage.getItem("ElectricFactory")));
		console.log(parseInt(localStorage.getItem("Money")));
		TotalCost = parseInt(localStorage.getItem("FillmoreCar")) + parseInt(localStorage.getItem("Tabernacle")) + parseInt(localStorage.getItem("HardRockLive")) + parseInt(localStorage.getItem("Rebel")) + parseInt(localStorage.getItem("HouseOfBlues")) + parseInt(localStorage.getItem("ElectricFactory")) + parseInt(localStorage.getItem("FillmoreDen")) + parseInt(localStorage.getItem("Paramount")) + parseInt(localStorage.getItem("Masonic"));
		document.getElementById('CostOutput').innerHTML = TotalCost;
		document.getElementById('No6').innerHTML = Venue6;
	})
	btn7.addEventListener("click", function() {
		console.log("Button 7 clicked")
		Venue7++;
		localStorage.setItem("FillmoreDen", parseInt(Venue7 * 34));
		console.log(parseInt(localStorage.getItem("FillmoreDen")));
		console.log(parseInt(localStorage.getItem("Money")));
		TotalCost = parseInt(localStorage.getItem("FillmoreCar")) + parseInt(localStorage.getItem("Tabernacle")) + parseInt(localStorage.getItem("HardRockLive")) + parseInt(localStorage.getItem("Rebel")) + parseInt(localStorage.getItem("HouseOfBlues")) + parseInt(localStorage.getItem("ElectricFactory")) + parseInt(localStorage.getItem("FillmoreDen")) + parseInt(localStorage.getItem("Paramount")) + parseInt(localStorage.getItem("Masonic"));
		document.getElementById('CostOutput').innerHTML = TotalCost;
		document.getElementById('No7').innerHTML = Venue7;
	})
	btn8.addEventListener("click", function() {
		console.log("Button 8 clicked")
		Venue8++;
		localStorage.setItem("Paramount", parseInt(Venue8 * 26));
		console.log(parseInt(localStorage.getItem("Paramount")));
		console.log(parseInt(localStorage.getItem("Money")));
		TotalCost = parseInt(localStorage.getItem("FillmoreCar")) + parseInt(localStorage.getItem("Tabernacle")) + parseInt(localStorage.getItem("HardRockLive")) + parseInt(localStorage.getItem("Rebel")) + parseInt(localStorage.getItem("HouseOfBlues")) + parseInt(localStorage.getItem("ElectricFactory")) + parseInt(localStorage.getItem("FillmoreDen")) + parseInt(localStorage.getItem("Paramount")) + parseInt(localStorage.getItem("Masonic"));
		document.getElementById('CostOutput').innerHTML = TotalCost;
		document.getElementById('No8').innerHTML = Venue8;
	})
	btn9.addEventListener("click", function() {
		console.log("Button 9 clicked")
		Venue9++;
		localStorage.setItem("Masonic", parseInt(Venue9 * 32));
		console.log(parseInt(localStorage.getItem("Masonic")));
		console.log(parseInt(localStorage.getItem("Money")));
		TotalCost = parseInt(localStorage.getItem("FillmoreCar")) + parseInt(localStorage.getItem("Tabernacle")) + parseInt(localStorage.getItem("HardRockLive")) + parseInt(localStorage.getItem("Rebel")) + parseInt(localStorage.getItem("HouseOfBlues")) + parseInt(localStorage.getItem("ElectricFactory")) + parseInt(localStorage.getItem("FillmoreDen")) + parseInt(localStorage.getItem("Paramount")) + parseInt(localStorage.getItem("Masonic"));
		document.getElementById('CostOutput').innerHTML = TotalCost;
		document.getElementById('No9').innerHTML = Venue9;
	})
}