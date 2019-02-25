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

//function u() {
//    //document.getElementById('dropdown1').innerHTML = select1 + " <span class='caret'></span>";
//    //var s = $(this).text();
//    //if (s == 'Time') {
//    //    options = "<li class='dropOption' id='seconds' value='Seconds'><a href='#'>Seconds</a></li><li class='dropOption' value = 'Minutes' ><a href='#'>Minutes</a></li ><li class='dropOption' value='Hours'><a href='#'>Hours</a></li><li class='dropOption'  value='Days'><a href='#'>Days</a></li>";
//        //var sec = "seconds";
//        //if (sec == "seconds") {
//        //    document.getElementById('seconds').onclick = function changeSelect2() {
//        //        document.getElementById('dropdown2').innerHTML = "Second <span class='caret'></span>";
//        //    }
//        //}
//        }
//    else if (select1 == 'Length') {
//        options = "<li class='dropOption' value='m'><a href='#'>m</a></li><li class='dropOption' value = 'cm' ><a href='#'>cm</a></li ><li class='dropOption' value='km'><a href='#'>km</a></li>";
//    }
//    else if (select1 == 'Temperature') {
//        options = "<li class='dropOption' value='k'><a href='#'>k</a></li><li class='dropOption' value = 'c' ><a href='#'>c</a></li ><li class='dropOption' value='F'><a href='#'>F</a></li>";
//    }
//    else if (select1 == 'Weight') {
//        options = "<li class='dropOption' value='g'><a href='#'>g</a></li><li class='dropOption' value = 'kg' ><a href='#'>kg</a></li ><li class='dropOption' value='Pound'><a href='#'>Pound</a></li>";
//    }
//    document.getElementById('select2').innerHTML = options;
//    document.getElementById('select3').innerHTML = options;
//}

//function changeSelect2(select2) {
//    document.getElementById('dropdown2').innerHTML = select2 + " <span class='caret'></span>";
//}

//function changeSelect3(select3) {
//    document.getElementById('dropdown3').innerHTML = select3 + " <span class='caret'></span>";
//}

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

//function u() {
//    var u = $(this).text();
//    if (u == 'Weight') {
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
//    makeBlank();
//    document.getElementById('select2').innerHTML = options;
//    document.getElementById('select3').innerHTML = options;
//    document.getElementById('value1').innerHTML = options;
//    document.getElementById('value2').innerHTML = options;

//}

//function makeBlank() {
//    document.getElementById("value1").value = "";
//    document.getElementById("value2").value = "";
//}


//function dropdownToggle() {
//    //var dropdown = $(this).parent().parent().prev();
//    //dropdown.html(
//    var k = $(this).text();
//    document.getElementById('selectText1').innerHTML = k;

//    //$('.dropdown-toggle').html() + ' <span class="caret"></span>';
//    //$("#test1").text("Hello world!");
//    //dropdown.val($(this).prop('data-value'));
//}

function u() {
    var s = $(this).text();
    document.getElementById('selectText1').innerHTML = s;
    //alert(s);

    if (s == 'Time') {
        var options = "<li class='dropOption' value='Seconds'><a href='#'>Seconds</a></li><li class='dropOption' value = 'Minutes' ><a href='#'>Minutes</a></li ><li class='dropOption' value='Hours'><a href='#'>Hours</a></li><li class='dropOption'  value='Days'><a href='#'>Days</a></li>";
    }
    else if (s == 'Length') {
        var options = "<li class='dropOption' value='m'><a href='#'>m</a></li><li class='dropOption' value = 'cm' ><a href='#'>cm</a></li ><li class='dropOption' value='km'><a href='#'>km</a></li>";
    }
    else if (s == 'Temperature') {
        var options = "<li class='dropOption' value='k'><a href='#'>K</a></li><li class='dropOption' value = 'c' ><a href='#'>C</a></li ><li class='dropOption' value='F'><a href='#'>F</a></li>";
    }
    else if (s == 'Weight') {
        var options = "<li class='dropOption' value='g'><a href='#'>g</a></li><li class='dropOption' value = 'kg' ><a href='#'>Kg</a></li ><li class='dropOption' value='Pound'><a href='#'>Pound</a></li>";
    }

    makeBlank();
    document.getElementById('select2').innerHTML = options;
    document.getElementById('select3').innerHTML = options;

    $('#select2 a').on('click', k);
    $('#select3 a').on('click', j);

    //$('#display1').on('keyup', converter1);
    //$('#display2').on('keyup', converter2);
    $('#select2 a').on('click', converter2);
    $('#select3 a').on('click', converter1);
}

function makeBlank() {
    document.getElementById('selectText2').innerHTML = 'Select';
    document.getElementById('selectText3').innerHTML = 'Select';
    document.getElementById('display1').innerHTML = '';
    document.getElementById('display2').innerHTML = '';
}

function k() {
    var b = $(this).text();
    //alert(b);
    document.getElementById('selectText2').innerHTML = b;
}

function j() {
    var c = $(this).text();
    //alert(c);
    document.getElementById('selectText3').innerHTML = c;
}

function converter1() {
    var first = (document.getElementById('selectText2').innerHTML);
    var second = (document.getElementById('selectText3').innerHTML);
    var x = (document.getElementById('display1').innerHTML);

    if (first == second) {

        document.getElementById("display2").innerHTML = x;
    }

    else if (first == 'C' && second == 'F') {
        r = (x * 1.8) + 32;

        var x = (document.getElementById('display1').innerHTML);
        document.getElementById("display2").innerHTML = r.toFixed(2);
    }

    else if (first == 'C' && second == 'K') {
        var x = parseInt(document.getElementById('display1').innerHTML);
        document.getElementById("display2").innerHTML = (x + 273);
    }

    else if (first == 'F' && second == 'C') {
        var x = (document.getElementById('display1').innerHTML);
        document.getElementById("display2").innerHTML = ((x - 32) / 1.8).toFixed(2);
    }

    else if (first == 'F' && second == 'K') {
        var x = (document.getElementById('display1').innerHTML);
        document.getElementById("display2").innerHTML = (((x - 32) / 1.8) + 273).toFixed(2);
    }

    else if (first == 'K' && second == 'C') {
        var x = parseInt(document.getElementById('display1').innerHTML);
        document.getElementById("display2").innerHTML = (x - 273);
    }

    else if (first == 'K' && second == 'F') {
        var x = parseFloat(document.getElementById('display1').innerHTML);
        document.getElementById("display2").innerHTML = (((x - 273) * 1.8) + 32);
    }

    else if (first == 'Kg' && second == 'Pounds') {
        var x = parseInt(document.getElementById('display1').innerHTML);
        document.getElementById("display2").innerHTML = (x / 0.454);
    }

    else if (first == 'Kg' && second == 'g') {
        var x = (document.getElementById('display1').innerHTML);
        document.getElementById("display2").innerHTML = x * 1000;
    }

    else if (first == 'g' && second == 'Kg') {
        var x = parseInt(document.getElementById('display1').innerHTML);
        document.getElementById("display2").innerHTML = (x / 1000);
    }

    else if (first == 'g' && second == 'Pounds') {
        var x = parseInt(document.getElementById('display1').innerHTML);
        document.getElementById("display2").innerHTML = ((x / 1000) / 0.454);
    }

    else if (first == 'Pounds' && second == 'kg') {
        var x = parseInt(document.getElementById('display1').innerHTML);
        document.getElementById("display2").innerHTML = (x * 0.454);
    }

    else if (first == 'Pounds' && second == 'g') {
        var x = parseInt(document.getElementById('display1').innerHTML);
        document.getElementById("display2").innerHTML = ((x * 0.454) * 1000);
    }

    else if (first == 'cm' && second == 'm') {
        var x = parseInt(document.getElementById('display1').innerHTML);
        document.getElementById("display2").innerHTML = (x / 100);
    }

    else if (first == 'cm' && second == 'km') {
        var x = parseInt(document.getElementById('display1').innerHTML);
        document.getElementById("display2").innerHTML = ((x / 100) / 1000);
    }

    else if (first == 'm' && second == 'cm') {
        var x = parseInt(document.getElementById('display1').innerHTML);
        document.getElementById("display2").innerHTML = (x * 100);
    }

    else if (first == 'm' && second == 'km') {
        var x = parseInt(document.getElementById('display1').innerHTML);
        document.getElementById("display2").innerHTML = (x / 1000);
    }

    else if (first == 'km' && second == 'm') {
        var x = parseInt(document.getElementById('display1').innerHTML);
        document.getElementById("display2").innerHTML = (x * 1000);
    }

    else if (first == 'km' && second == 'cm') {
        var x = parseInt(document.getElementById('display1').innerHTML);
        document.getElementById("display2").innerHTML = ((x * 100) * 1000);
    }

    else if (first == 'Hours' && second == 'Minutes') {
        var x = parseInt(document.getElementById('display1').innerHTML);
        document.getElementById("display2").innerHTML = (x * 60);
    }

    else if (first == 'Seconds' && second == 'Minutes') {
        var x = parseInt(document.getElementById('display1').innerHTML);
        document.getElementById("display2").innerHTML = (x / 60);
    }

    else if (first == 'Seconds' && second == 'Hours') {
        var x = parseInt(document.getElementById('display1').innerHTML);
        document.getElementById("display2").innerHTML = (x / 3600);
    }

    else if (first == 'Minutes' && second == 'Seconds') {
        var x = parseInt(document.getElementById('display1').innerHTML);
        document.getElementById("display2").innerHTML = (x * 60);
    }

    else if (first == 'Minutes' && second == 'Hours') {
        var x = parseInt(document.getElementById('display1').innerHTML);
        document.getElementById("display2").innerHTML = (x / 60);
    }

    else if (first == 'Hours' && second == 'Seconds') {
        var x = parseInt(document.getElementById('display1').innerHTML);
        document.getElementById("display2").innerHTML = (x * 3600);
    }

}

function converter2() {
    var first = (document.getElementById('selectText2').innerHTML);
    var second = (document.getElementById('selectText3').innerHTML);
    var x = (document.getElementById('display2').innerHTML);

    if (first == second) {

        document.getElementById("display1").innerHTML = x;
    }

    else if (first == 'F' && second == 'C') {
        var x = (document.getElementById('display2').innerHTML);
        document.getElementById("display1").innerHTML = (x * 1.8) + 32;
    }

    else if (first == 'K' && second == 'C') {
        var x = parseInt(document.getElementById('display2').innerHTML);
        document.getElementById("display1").innerHTML = x + 273;
    }

    else if (first == 'C' && second == 'F') {
        var x = (document.getElementById('display2').innerHTML);
        document.getElementById("display1").innerHTML = (x - 32) / 1.8;
    }

    else if (first == 'K' && second == 'F') {
        var x = (document.getElementById('display2').innerHTML);
        document.getElementById("display1").innerHTML = ((x - 32) / 1.8) + 273;
    }

    else if (first == 'C' && second == 'K') {
        var x = parseInt(document.getElementById('display2').innerHTML);
        document.getElementById("display1").innerHTML = (x - 273);
    }

    else if (first == 'F' && second == 'K') {
        var x = parseInt(document.getElementById('display2').innerHTML);
        document.getElementById("display1").innerHTML = (((x - 273) * 1.8) + 32);
    }

    else if (first == 'Pounds' && second == 'Kg') {
        var x = parseInt(document.getElementById('display2').innerHTML);
        document.getElementById("display1").innerHTML = (x / 0.454);
    }

    else if (first == 'g' && second == 'Kg') {
        var x = (document.getElementById('display2').innerHTML);
        document.getElementById("display1").innerHTML = x * 1000;
    }

    else if (first == 'Kg' && second == 'g') {
        var x = parseInt(document.getElementById('display2').innerHTML);
        document.getElementById("display1").innerHTML = (x / 1000);
    }

    else if (first == 'Pounds' && second == 'g') {
        var x = parseInt(document.getElementById('display2').innerHTML);
        document.getElementById("display1").innerHTML = ((x / 1000) / 0.454);
    }

    else if (first == 'Kg' && second == 'Pounds') {
        var x = parseInt(document.getElementById('display2').innerHTML);
        document.getElementById("display1").innerHTML = (x * 0.454);
    }

    else if (first == 'g' && second == 'Pounds') {
        var x = parseInt(document.getElementById('display2').innerHTML);
        document.getElementById("display1").innerHTML = ((x * 0.454) * 1000);
    }

    else if (first == 'm' && second == 'cm') {
        var x = parseInt(document.getElementById('display2').innerHTML);
        document.getElementById("display1").innerHTML = (x / 100);
    }

    else if (first == 'km' && second == 'cm') {
        var x = parseInt(document.getElementById('display2').innerHTML);
        document.getElementById("display1").innerHTML = ((x / 100) / 1000);
    }

    else if (first == 'cm' && second == 'm') {
        var x = parseInt(document.getElementById('display2').innerHTML);
        document.getElementById("display1").innerHTML = (x * 100);
    }

    else if (first == 'km' && second == 'm') {
        var x = parseInt(document.getElementById('display2').innerHTML);
        document.getElementById("display1").innerHTML = (x / 1000);
    }

    else if (first == 'm' && second == 'km') {
        var x = parseInt(document.getElementById('display2').innerHTML);
        document.getElementById("display1").innerHTML = (x * 1000);
    }

    else if (first == 'cm' && second == 'km') {
        var x = parseInt(document.getElementById('display2').innerHTML);
        document.getElementById("display1").innerHTML = ((x * 100) * 1000);
    }

    else if (first == 'Minutes' && second == 'Hours') {
        var x = parseInt(document.getElementById('display2').innerHTML);
        document.getElementById("display1").innerHTML = (x * 60);
    }

    else if (first == 'Minutes' && second == 'Seconds') {
        var x = parseInt(document.getElementById('display2').innerHTML);
        document.getElementById("display1").innerHTML = (x / 60);
    }

    else if (first == 'Hours' && second == 'Seconds') {
        var x = parseInt(document.getElementById('display2').innerHTML);
        document.getElementById("display1").innerHTML = (x / 3600);
    }

    else if (first == 'Seconds' && second == 'Minutes') {
        var x = parseInt(document.getElementById('display2').innerHTML);
        document.getElementById("display1").innerHTML = (x * 60);
    }

    else if (first == 'Hours' && second == 'Minutes') {
        var x = parseInt(document.getElementById('display2').innerHTML);
        document.getElementById("display1").innerHTML = (x / 60);
    }

    else if (first == 'Seconds' && second == 'Hours') {
        var x = parseInt(document.getElementById('display2').innerHTML);
        document.getElementById("display1").innerHTML = (x * 3600);
    }

}

$(document).ready(function () {
    $('.d1 a').on('click', u);
    $('#select2 a').on('click', k);
    $('#select3 a').on('click', j);
    $('#display1').on('change', converter1);
    $('#display2').on('change', converter2);
    $('#select2 a').on('click', converter2);
    $('#select3 a').on('click', converter1);


    //$('#keypad').on('keydown paste click', function (event) {
    //    $('span').text('Total chars:' + $(this).text().length);
    //    if ($(this).text().length === 10 && event.keyCode != 8) {
    //        event.preventDefault();
    //    }
    //});
});

