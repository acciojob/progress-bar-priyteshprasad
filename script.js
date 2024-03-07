//your JS code here. If required.
let progress = 1;
const prev = document.getElementById("prev")
const next = document.getElementById("next")
next.addEventListener('click', ()=>{
	if(progress <5){
		progress+=1;
		let currProgress = document.getElementById("circle-"+progress);
		currProgress.classList.add("active")
		if(progress == 5){
			next.setAttribute("disabled", "")
		}
			prev.removeAttribute("disabled")
	}
})
prev.addEventListener('click', ()=>{
	if(progress >=0){
		let currProgress = document.getElementById("circle-"+progress);
		currProgress.classList.remove("active")
		progress-=1;
		if(progress == 1){
			prev.setAttribute("disabled", "")
		}
			next.removeAttribute("disabled")
	}
})