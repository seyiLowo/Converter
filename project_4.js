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

	function select(val){
		if (val == "Weight"){
			var options = "<option value='kg'>kg</option><option value='g'>g</option><option value='mg'>mg</option><option value='lb'>lb</option>";
		}
		else {
			var options = "<option value='kg'>kg</option><option value='g'>g</option><option value='mg'>mg</option><option value='lb'>lb</option>";
		}

		document.getElementsByClassName('subSelect').innerHTML = options;
	}