console.log(`Moon Position Loader`);
var moonLocation = document.getElementsByClassName(`moon-freya-perspective`);
var moon = document.getElementsByClassName(`moon-freya`);

const checkmoon = () => {
	let currentAnchor = getAnchor();
	let newclass;
	switch (currentAnchor) {
		case `home`:
			newclass = `home-moon`;
			removeClass1 = `projects-moon`;
			removeClass2 = `about-moon`;
			removeClass3 = `contact-moon`;
			break;
		case `projects`:
			newclass = `projects-moon`;
			removeClass1 = `home-moon`;
			removeClass2 = `about-moon`;
			removeClass3 = `contact-moon`;
			break;
		case `about`:
			newclass = `about-moon`;
			removeClass1 = `home-moon`;
			removeClass2 = `projects-moon`;
			removeClass3 = `contact-moon`;
			break;
		case `contact`:
			newclass = `contact-moon`;
			removeClass1 = `home-moon`;
			removeClass2 = `projects-moon`;
			removeClass3 = `about-moon`;
			break;
	}
	console.log(newclass);
	for (var i = 0; i < moonLocation.length; i++) {
		console.log(`innerHTML: ${moon[i].innerHTML}`);
		moonLocation[i].classList.remove(removeClass1);
		moonLocation[i].classList.remove(removeClass2);
		moonLocation[i].classList.remove(removeClass3);
		moonLocation[i].classList.add(newclass);
		changeMoonInnerHTML(moon[i], newclass);
	}
}

const changeMoonInnerHTML = (moons, newclass) => {
	switch (newclass) {
		case `contact-moon`:
			moons.innerHTML = `<div class='moon-overlay'></div>`;
			break;
		case `projects-moon`:
			moons.innerHTML =
				`<a onclick="moveToPage('projects.html', 'projects')" class='moon-link moon-link-projects'>Show more</a>`;
			break;
		case `about-moon`:
			moons.innerHTML =
				`<a onclick="moveToPage('aboutme.html', 'about')" class='moon-link moon-link-about'>Show more</a>`;
			break;
		default:
			moons.innerHTML = ``;
	}

}

checkmoon();