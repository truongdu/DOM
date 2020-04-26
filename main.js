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

}
// addClass(changeContainerClass,'abc');
// addClass(h1,'conga');