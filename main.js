var demoText = document.querySelector("#demo_style");
console.log(demoText);

//Change Color of Demo text p
function changeColor(url_style) {
	var a = demoText.setAttribute("href", url_style);
	console.log(a);
}