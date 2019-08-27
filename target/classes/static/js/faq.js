var accordion = document.getElementsByClassName("accordion");

for (let i = 0; i < accordion.length; i++) {
	accordion[i].addEventListener("click", function(){
		this.classList.toggle("active");
		var details = this.nextElementSibling;
		if (details.style.maxHeight) {
			details.style.maxHeight = null;
		} else {
			details.style.maxHeight = details.scrollHeight + "px";
		}
	});
}