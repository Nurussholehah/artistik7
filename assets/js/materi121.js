function cek1(){
	satu=(document.getElementById("b1").value);
	
	if (satu=="<"){
	document.getElementById("b1").style="border: 3px solid green; width:50px;"
	}
	
	else{
	document.getElementById("b1").style="border: 3px solid red; width:50px;"
	}
}

function cek2(){
	satu=(document.getElementById("b2").value);
	
	if (satu==">"){
	document.getElementById("b2").style="border: 3px solid green; width:50px;"
	}
	
	else{
	document.getElementById("b2").style="border: 3px solid red; width:50px;"
	}
}

function cek3(){
	satu=(document.getElementById("b3").value);
	
	if (satu=="="){
	document.getElementById("b3").style="border: 3px solid green; width:50px;"
	}
	
	else{
	document.getElementById("b3").style="border: 3px solid red; width:50px;"
	}
}