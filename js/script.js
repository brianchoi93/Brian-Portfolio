// const next = document.querySelector('.next');
// next.addEventListener('click', () => {
// 	previousImgIndex += currentImgIndex;
// 	images[previousImgIndex].style.display = 'none';
// 	images[currentImgIndex].style.display = 'block';
// });

// let currentImgIndex = 0;
// let previousImgIndex = 0;
// const images = document.querySelector('.images');

//====== RESUME MODAL ======\\
let modal = document.querySelector('#resumeModal');
let modalBtn = document.querySelector('#modalBtn');
let closeBtn = document.querySelector('.closeBtn');

modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);

function openModal() {
	// console.log(it works!);
	modal.style.display = 'block';
}

function closeModal() {
	modal.style.display = 'none';
}

//===== PROJECT CAROUSEL =====\\
let currentImgIndex = 0;
let previousImgIndex = 0;
const images = document.querySelectorAll('.images');

const next = document.querySelector('.next');
next.addEventListener('click', function () {
	let previousImgIndex = currentImgIndex;
	currentImgIndex = currentImgIndex + 1;
	if (currentImgIndex >= images.length) {
		currentImgIndex = 0;
	}
	images[previousImgIndex].style.display = 'none';
	images[currentImgIndex].style.display = 'block';
});

const prev = document.querySelector('.prev');
prev.addEventListener('click', () => {
	let previousImgIndex = currentImgIndex;
	currentImgIndex = currentImgIndex - 1;
	if (currentImgIndex < 0) {
		currentImgIndex = 2;
	}
	images[previousImgIndex].style.display = 'none';
	images[currentImgIndex].style.display = 'block';
});
// const prev = document.querySelector('.prev');
// prev.addEventListener('click', function () {
// 	let currentImgIndex = previousImgIndex;
// 	if (currentImgIndex > 0) {
// 		currentImgIndex = images.length--;
// 	} else {
// 		currentImgIndex = 2;
// 	}
// 	images[previousImgIndex].style.display = 'none';
// 	images[currentImgIndex].style.display = 'block';
// });

//===== CONTACT MODAL =====\\
let modal2 = document.querySelector('.contact-page');
let modalBtn2 = document.querySelector('#contactLink');
let closeBtn2 = document.querySelector('.closeBtn2');

modalBtn2.addEventListener('click', openContact);
closeBtn2.addEventListener('click', closeContact);

function openContact() {
	modal2.style.display = 'block';
}

function closeContact() {
	modal2.style.display = 'none';
}

//===== CONTACT SUBMIT FORM =====\\
let firstName = document.querySelector('#first-name');
let lastName = document.querySelector('#last-name');
let email = document.querySelector('#email');
let message = document.querySelector('#textarea');

document.querySelector('#contactme').addEventListener('submit', function () {
	console.log(firstName.value);
	console.log(lastName.value);
	console.log(email.value);
	console.log(message.value);
});
