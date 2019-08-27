 function buildDropDown(name,index,array) {
	var opt = document.createElement("option");
	opt.value = name;
	opt.innerHTML = name;
	dropdown.appendChild(opt);
}

var container = document.getElementById("dynaflex"),
array = container.getElementsByTagName("figure"),
selectionBar = document.getElementById("selectionbar"),
categories = [];
for (var i = 0; i < array.length ;i++) {
	categories[i] = array[i].dataset.group;
}
var unique = categories.filter(function(item, i, ar){ return ar.indexOf(item) === i; });
unique.reverse();
unique.unshift("Wszystkie zdjęcia");

var dropdown = document.createElement("select");
dropdown.id = "categories";
var dropdownLabel = document.createElement("label");
dropdownLabel.for = dropdown.id;
unique.forEach(buildDropDown);
selectionBar.appendChild(dropdownLabel);
selectionBar.appendChild(dropdown);

dropdown.addEventListener("change", function() {
  console.log("Change");
if (this.value == "Wszystkie zdjęcia") {
	for (var i = 0; i < array.length; ++i) {	array[i].classList.remove("diminish");
		}
} else {
	var hide = document.querySelectorAll('#dynaflex figure:not([data-group="'+this.value+'"])');
	for (var j = 0; j < hide.length; ++j) {
 	hide[j].classList.add("diminish");
		}
		var show = document.querySelectorAll('#dynaflex figure[data-group="'+this.value+'"]');
	for (var k = 0; k < show.length; ++k) {	show[k].classList.remove("diminish");
		}
	}
}
)
