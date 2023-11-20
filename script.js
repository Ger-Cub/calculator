let boutons = document.querySelectorAll(".bouton");
let input = document.querySelector("input")
let arr = Array.from(boutons);
let str = ""
arr.forEach(btn =>{btn.addEventListener("click",(e)=>{
	if (e.target.innerText == '='){
		
		str = eval(str)
		input.value = str;
		console.log(str)
	}

	else if(e.target.innerText == 'C'){
		str = "";
		input.value = str
	}

	else if(e.target.innerText == '⟵'){
		console.log(e.target.innerText)
		str =  str.substring(0, str.length-1);
		input.value = str;
	}

	else{
		str = str + e.target.innerText;
		input.value = str;
		console.log(str)
	}

})});



