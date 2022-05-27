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
window.addEventListener('click', clickOutside);

function openModal() {
	// console.log(it works!);
	modal.style.display = 'block';
}

function closeModal() {
	modal.style.display = 'none';
}

function clickOutside(close) {
	if (close.target == modal) {
		modal.style.display = 'none';
	}
}
