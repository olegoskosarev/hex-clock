const clock = document.getElementById("clock");
const color = document.getElementById("color");

function hexClock() {
	const time = new Date();
	let h = time.getHours().toString();
	let m = time.getMinutes().toString();
	let s = time.getSeconds().toString();
	
	h = (h.length < 2) ? "0" + h : h;
	m = (m.length < 2) ? "0" + m : m;
	s = (s.length < 2) ? "0" + s : s;

	const clockString = h + ":" + m + ":" + s;
	const colorString = "#" + h + m + s;

	clock.textContent = clockString;
	color.textContent = colorString;

	document.body.style.background = colorString;
}

hexClock();
setInterval(hexClock, 1000);