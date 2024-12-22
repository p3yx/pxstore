function sendToWhatsapp(){
	let number = "+6283151636921";

	let name = document.getElementById('name').value;
	let email = document.getElementById('email').value;
	let message = document.getElementById('message').value;

	var url = "https://wa.me/" + number + "?text="
	
	+ "- *Name  :* " +name+ "%0a"
	+ "- *Config :* " +email+ "%0a"
	+ "- *Server  :* " +message+ "%0a%0a";
	window.open(url, '_blank').focus();
}