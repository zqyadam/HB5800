function getRadioboxValue (selectorString) {
	var a = document.querySelectorAll(selectorString);
	for (var i = 0; i < a.length; i++) {
		if(a[i].checked) return a[i].value;
	}    		
}

function getCheckboxValue(){
	var a = document.querySelectorAll(selectorString);
	var val = [];
	for (var i = 0; i<a.length; a++) {
  		console.log(a[i].checked);
		if(a[i].checked) val.push(i);
	}   
	return val;
}