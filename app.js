const nav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');
const navItem1 = document.querySelector('.nav-item1');
const navItem2 = document.querySelector('.nav-item2');

// when someone clicks the hamburger button
navToggle.addEventListener('click', () => {
	const visibility = nav.getAttribute('data-visible');
	if (visibility === 'false') {
		nav.setAttribute('data-visible', true);
		navToggle.setAttribute('aria-expanded', true);
		document.body.style.overflow = 'hidden';
	} else {
		nav.setAttribute('data-visible', false);
		navToggle.setAttribute('aria-expanded', false);
		document.body.style.overflow = 'auto';
	}
});
