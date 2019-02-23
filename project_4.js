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

function changeSelect1(select1) {
    document.getElementById('dropdown1').innerHTML = select1 + " <span class='caret'></span>";
    
    if (select1 == 'Time') {
        options = "<li class='dropOption' id='seconds' value='Seconds'><a href='#'>Seconds</a></li><li class='dropOption' value = 'Minutes' ><a href='#'>Minutes</a></li ><li class='dropOption' value='Hours'><a href='#'>Hours</a></li><li class='dropOption'  value='Days'><a href='#'>Days</a></li>";
    //    var sec = "seconds";
    //    if (sec == "seconds") {
    //        document.getElementById('seconds').onclick = function changeSelect2() {
    //            document.getElementById('dropdown2').innerHTML = "Second <span class='caret'></span>";
    //        }
    //    }
        }
    else if (select1 == 'Length') {
        options = "<li class='dropOption' value='m'><a href='#'>m</a></li><li class='dropOption' value = 'cm' ><a href='#'>cm</a></li ><li class='dropOption' value='km'><a href='#'>km</a></li>";
    }
    else if (select1 == 'Temperature') {
        options = "<li class='dropOption' value='k'><a href='#'>k</a></li><li class='dropOption' value = 'c' ><a href='#'>c</a></li ><li class='dropOption' value='F'><a href='#'>F</a></li>";
    }
    else if (select1 == 'Weight') {
        options = "<li class='dropOption' value='g'><a href='#'>g</a></li><li class='dropOption' value = 'kg' ><a href='#'>kg</a></li ><li class='dropOption' value='Pound'><a href='#'>Pound</a></li>";
    }
    document.getElementById('select2').innerHTML = options;
    document.getElementById('select3').innerHTML = options;
}

function changeSelect2(select2) {
    document.getElementById('dropdown2').innerHTML = select2 + " <span class='caret'></span>";
}

function changeSelect3(select3) {
    document.getElementById('dropdown3').innerHTML = select3 + " <span class='caret'></span>";
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

//function u(u) {
//    document.getElementById('select2').innerHTML = options;
//    document.getElementById('select3').innerHTML = options;

//    if (u == 'Mass') {
//        var options = "<table><tr><td><input type='number'>' '</td><td><select><option value='Kg'>Kg</option><option value='g'>g</option><option value='Pounds'>Pounds</option></select></td></tr></table>";
//    }

//    else if (u == 'Length') {
//        var options = "<option value='m'>m</option><option value='cm'>cm</option><option value='Km'>Km</option>";
//    }

//    else if (u == 'Time') {
//        var options = "<li class='dropOption' value='Seconds'><a href='#'>Seconds</a></li>< li class='dropOption' value = 'Minutes' > <a href='#'>Minutes</a></li ><li class='dropOption' value='Hours'><a href='#'>Hours</a></li><li class='dropOption'  value='Days'><a href='#'>Days</a></li>";
//    }

//    else if (u == 'Temperature') {
//        var options = "<option value='C'>C</option><option value='F'>F</option><option value='K'>K</option>";
//    }
    //makeBlank();
    //document.getElementById('value1').innerHTML = options;
    //document.getElementById('value2').innerHTML = options;

//}

//function makeBlank() {
//    document.getElementById("value1").value = "";
//    document.getElementById("value2").value = "";
//}