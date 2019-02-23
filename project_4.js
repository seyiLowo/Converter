var flag = true;
	function display(val){
		document.getElementById('display1').onfocus = function(){
			flag = true;
		}
		document.getElementById('display2').onfocus = function(){
			flag = false;
		}
		if(flag){
			document.getElementById('display1').innerHTML += val;
		}else{
			document.getElementById('display2').innerHTML += val;
		}
		
	}

	function c(val){
		document.getElementById('display1').onfocus = function(){
			flag = true;
		}
		document.getElementById('display2').onfocus = function(){
			flag = false;
		}
		if(flag){
				document.getElementById("display1").innerHTML=val;
		}else{
				document.getElementById("display2").innerHTML=val;
		}
}

function deleteChar() {
    document.getElementById('display1').onfocus = function () {
        flag = true;
    }
    document.getElementById('display2').onfocus = function () {
        flag = false;
    }
    if (flag) {
        var x1 = document.getElementById("display1").innerHTML;
        var y1 = x1.substring(0, x1.length - 1);
        document.getElementById("display1").innerHTML = y1;
        //document.getElementById("display1").innerHTML = val;
    }
    else {
        var x2 = document.getElementById("display2").innerHTML;
        var y2 = x2.substring(0, x2.length - 1);
        document.getElementById("display2").innerHTML = y2;
        //document.getElementById("display2").innerHTML = val;
    }

}

	// function select(val){
	// 	if (val == "Weight"){
	// 		var options = "<option value='kg'>kg</option><option value='g'>g</option><option value='mg'>mg</option><option value='lb'>lb</option>";
	// 	}
	// 	else {
	// 		var options = "<option value='kg'>kg</option><option value='g'>g</option><option value='mg'>mg</option><option value='lb'>lb</option>";
	// 	}

	// 	document.getElementsByClassName('subSelect').innerHTML = options;
	// }

	function u(u)
		{
			
			if (u=='Weight')
			{
				var options = "<option value='Kg'>Kg</option><option value='g'>g</option><option value='Pounds'>Pounds</option>";
			}

			else if (u=='Length')
			{
				var options = "<option value='m'>m</option><option value='cm'>cm</option><option value='Km'>Km</option>";
			}

			else if (u=='Time')
			{
				var options = "<option value='sec'>sec</option><option value='min'>min</option><option value='hr'>hr</option>";
			}

			else if (u=='Temperature')
			{
				var options = "<option value='C'>C</option><option value='F'>F</option><option value='K'>K</option>";
			}
			makeBlank();
			document.getElementById('display1').innerHTML = options;
			document.getElementById('display2').innerHTML = options;
			document.getElementById('select2').innerHTML = options;
			document.getElementById('select3').innerHTML = options;
		}