/*
* A small library for simple javascript transitions
*
*/

function fadeOut(element) {
	element.style.opacity = 1;

	(function fade() {
		if((element.style.opacity -= 0.03) < 0) {
			element.style.display = 'none';
		} else requestAnimationFrame(fade);
	})();
}

function fadeIn(element, display) {
	element.style.opacity = 0;
	element.style.display = display || 'block';

	(function fade() {
		var val = parseFloat(element.style.opacity);
		if(!((val += 0.03) > 1)) {
			element.style.opacity = val;
			requestAnimationFrame(fade);
		}
	})();
}