

/**
 * About Me Text changer
 */

const aboutme = document.getElementById(`aboutme`);
const aboutmeString = [`Speedrunner`, `Poet`, `Speedrun Journalist`];
const aboutmeMax = aboutmeString.length-1;
var aboutmeIndex = 0;
aboutme.innerHTML = aboutmeString[aboutmeIndex];
const aboutmeTimer = 3000;

console.log(aboutmeString)
console.log(aboutmeMax)

const aboutmeSlider = () => {
	let aboutmeTimer = Math.floor(Math.random()*1000)+2000;
	if (aboutmeIndex < aboutmeMax ) {
		aboutmeIndex++
	} else {
		aboutmeIndex = 0
	}
	aboutme.innerHTML = aboutmeString[aboutmeIndex];
}

var aboutmeInterval = setInterval(aboutmeSlider, aboutmeTimer);

window.onresize = function(){
    document.body.height = window.innerHeight;
}
window.onresize(); // called to initially set the height.