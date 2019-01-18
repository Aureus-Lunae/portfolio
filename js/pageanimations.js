const moveToPage = (link, color = `home`) => {
	console.log(`moveToPage Started`);
	let fadeOut = document.getElementsByClassName(`load-page`);
	let cssColor = '';

	switch (color) {
		case `home`:
			cssColor = `fade-out-home`;
			break;
		case `projects`:
			cssColor = `fade-out-projects`;
			break;
		case `about`:
			cssColor = `fade-out-about`;
			break;
		default:
			cssColor = `fade-out-home`;
			break;
	}

	for (var i = 0; i < fadeOut.length; i++) {
		fadeOut[i].classList.add(cssColor);
	}
	setTimeout(activateLink, 2000, link);
}

const projectsToPage = (link, color = `home`) => {
	console.log(`moveToPage Started`);
	let fadeOut = document.getElementsByClassName(`load-page`);
	let cssColor = '';

	switch (color) {
		case `home`:
			cssColor = `fade-out-home`;
			break;
		case `projects`:
			cssColor = `fade-out-projects`;
			break;
		case `about`:
			cssColor = `fade-out-about`;
			break;
		case `contact`:
			cssColor = `fade-out-contact`;
			break;
		default:
			cssColor = `fade-out-home`;
			break;
	}

	for (var i = 0; i < fadeOut.length; i++) {
		fadeOut[i].classList.add(cssColor);
	}
	setTimeout(activateLink, 2000, link);
}


const activateLink = (link) => {
	console.log(`timer working?`)
	window.location.href = link;
}