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

/////////////SIMULATOR CODE ///////////////////////////////

const img01 = document.querySelector('.city');
const btnReset = document.querySelector('#btn-reset');
const btn01 = document.querySelector('#btn-01');
const btn02 = document.querySelector('#btn-02');
const btn03 = document.querySelector('#btn-03');
const btn04 = document.querySelector('#btn-04');
const trees = document.querySelector('.trees-wrap');
const info = document.querySelector('.info-text');
const years = document.querySelector('.years');
const kgs = document.querySelector('.kgs');

let control = 0;
let milesCtrl = 0;
let carCtrl = 0;

const setControl = function () {
	if (milesCtrl === 1 && carCtrl === 1) {
		control = 1;
		img01.src = 'images/icon-city-fog-30.png';
		years.innerHTML = '1';
		kgs.innerHTML = '200';
	} else if (milesCtrl === 1 && carCtrl === 2) {
		control = 2;
		img01.src = 'images/icon-city-fog-50.png';
		years.innerHTML = '2';
		kgs.innerHTML = '400';
	} else if (milesCtrl === 2 && carCtrl === 1) {
		control = 3;
		img01.src = 'images/icon-city-fog-65.png';
		years.innerHTML = '10';
		kgs.innerHTML = '2000';
	} else if (milesCtrl === 2 && carCtrl === 2) {
		control = 4;
		img01.src = 'images/icon-city-fog-95.png';
		years.innerHTML = '20';
		kgs.innerHTML = '4000';
	} else {
		control = 0;
		img01.src = 'images/icon-city-lights.png';
	}
};

const displayTreesAndInfo = function () {
	if (control > 0) {
		trees.style.display = 'block';
		info.style.display = 'block';
	} else {
		trees.style.display = 'none';
		info.style.display = 'none';
	}
};

let btnResetToggle = true;

btnReset.addEventListener('click', () => {
	milesCtrl = 0;
	carCtrl = 0;
	setControl();
	displayTreesAndInfo();
	if (btnResetToggle === true) {
		btnReset.style.background = 'orange';
		btn01.style.background = 'white';
		btn02.style.background = 'white';
		btn03.style.background = 'white';
		btn04.style.background = 'white';
		btnResetToggle = false;
		setTimeout(() => {
			btnReset.style.background = 'blue';
		}, 1000);
		btnResetToggle = true;
	} else {
		btnReset.style.background = 'blue';
		btnResetToggle = true;
	}
	console.log(control);
});

btn01.addEventListener('click', () => {
	milesCtrl = 1;
	setControl();
	displayTreesAndInfo();
	btn01.style.background = 'yellow';
	btn02.style.background = 'white';
});

btn02.addEventListener('click', () => {
	milesCtrl = 2;
	setControl();
	displayTreesAndInfo();
	btn01.style.background = 'white';
	btn02.style.background = 'yellow';
});

btn03.addEventListener('click', () => {
	carCtrl = 1;
	setControl();
	displayTreesAndInfo();
	btn03.style.background = 'yellow';
	btn04.style.background = 'white';
});

btn04.addEventListener('click', () => {
	carCtrl = 2;
	setControl();
	displayTreesAndInfo();
	btn03.style.background = 'white';
	btn04.style.background = 'yellow';
});
