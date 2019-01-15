console.log(`Moon Position Loader`);
var moonlocation = document.getElementsByClassName(`moonfreya-perspective`);
var moon = document.getElementsByClassName(`moonfreya`);

const checkmoon = () => {
	let currentAnchor = getAnchor();
	let newclass;
	switch (currentAnchor){
		case `home`:
			newclass=`homemoon`;
			removeClass1=`projectsmoon`;
			removeClass2=`aboutmoon`;
			removeClass3=`contactmoon`;
			break;
		case `projects`:
			newclass=`projectsmoon`;
			removeClass1=`homemoon`;
			removeClass2=`aboutmoon`;
			removeClass3=`contactmoon`;
			break;
		case `about`:
			newclass=`aboutmoon`;
			removeClass1=`homemoon`;
			removeClass2=`projectsmoon`;
			removeClass3=`contactmoon`;
			break;
		case `contact`:
			newclass=`contactmoon`;
			removeClass1=`homemoon`;
			removeClass2=`projectsmoon`;
			removeClass3=`aboutmoon`;
			break;
	}
	console.log(newclass);
	for (var i = 0; i < moonlocation.length; i++) {
		console.log(`innerHTML: ${moon[i].innerHTML}`);
		moonlocation[i].classList.remove(removeClass1);
		moonlocation[i].classList.remove(removeClass2);
		moonlocation[i].classList.remove(removeClass3);
    	moonlocation[i].classList.add(newclass);
  		changeMoonInnerHTML(moon[i], newclass);
    }
}

const changeMoonInnerHTML = (moons, newclass) => {
	switch (newclass) {
		case `contactmoon`:
			moons.innerHTML=`<div class='moonoverlay'></div>`;
			break;
		case `projectsmoon`:
			moons.innerHTML=`<a href='projects.html' class='moonlink moonlinkprojects'>Show more</a>`;
			break;
		default:
			moons.innerHTML=``;
	}

}

checkmoon();