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
