var changeColorID = document.getElementById("changeColor-text");
var changeContainerClass = document.querySelector(".container");
var h1 = document.getElementsByTagName("h1")[0];


//Change Color of Demo text p
function changeStyleColor(url) {
	changeColorID.setAttribute ("href", url);
}

//Change Container and Container-fluid
// function changeContainer(type){
// 	var newContainer = "container " + type;
// 	changeContainerClass.setAttribute("class", newContainer);
// 	console.log(type);
// }

function addClass(el, className){
	var oldClass = el.getAttribute('class');
	if(oldClass){
		var checkClass = oldClass.indexOf(className); //kiem tra xem class Name can them co ton tai trong class cu~ hay chua`
			if(checkClass < 0){
				var newClass = oldClass + ' ' + className;
				console.log(newClass);
				el.setAttribute('class', newClass);
			}else {
				console.log(oldClass);
			}
		
	}else{
		el.setAttribute('class', className);
	}

}

function removeClass(el, className){
	/*
		Nếu oldClass có tồn tại => tiến hành kiểm tra logic removeClass
			nếu className tồn tại trong oldClass => tiếp tục xử lỹ logic removeClass
				đưa oldClass về 1 arr => dùng split(' ');
				kiếm tra xem className trong arr oldClass nằm tại vị trí thứ mấy => dùng arr.indexof(className)
					nếu kết quả trả về -1 => không tìm thấy = > thì thôi.
					kết kết quả trả về >=0 => dùng splice(indexof(className),1) để xóa 1 phần tử tại ví trí xuất hiện của className
						trả về mảng đã được xóa.
			nếu className không tồn tại trong oldClass => thì thôi
		nếu oldClass không tồn tại => thì thôi.
	*/
	var oldClass = el.getAttribute("class");
	if(oldClass){
		var stringToArrClass = oldClass.split(" ");
		console.log(stringToArrClass);
		var checkClass = stringToArrClass.indexOf(className);
		if(checkClass < 0){
			console.log(oldClass);
		}else{
			stringToArrClass.splice(checkClass,1);
			var arrToStringClass = stringToArrClass.join(" ");
			console.log(arrToStringClass);
			el.setAttribute("class", arrToStringClass);
		}
	}else{
		console.log("Class khong ton tai");
	}
}
// addClass(changeContainerClass,'abc');
// addClass(h1,'conga');
// removeClass(changeContainerClass,'abc2');


var dropDownList = document.querySelector(".dropdown");

function openDropDown(key){
	var a = dropDownList.getAttribute("class");
	var stringToArray = a.split(" ");
	if(stringToArray.indexOf(key) == -1){
		dropDownList.classList.add(key);
	} else {
		dropDownList.classList.remove(key);
	}
}

var listSelectYear = Array.from( document.querySelectorAll("select[name='form-year__select']") );
console.log(listSelectYear);

for(var i=0; i<listSelectYear.length; i++ ){
	var select = listSelectYear[i];
	// console.log(select);
	for(var j=1995; j<=2021; j++ ){
		var createOption = document.createElement("option");
			createOption.setAttribute("value", j);
			createOption.innerHTML = "Năm: " + j;
		select.append(createOption);
		console.log(createOption);
	}
}