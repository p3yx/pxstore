function sendToWhatsapp(){
	let number = "+6283151636921";

	let name = document.getElementById('name').value;
	let Config = document.getElementById('config').value;
	let Server= document.getElementById('server').value;

	var url = "https://wa.me/" + number + "?text="
	+ "Name : " +name+ "%0a"
	+ "Config : " +config+ "%0a"
	+ "Server : " +server+ "%0a%0a";

	window.open(url, '_blank').focus();
}