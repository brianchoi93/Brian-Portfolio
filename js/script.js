const next = document.querySelector('.next');
next.addEventListener('click', () => {
	previousImgIndex += currentImgIndex;
	images[previousImgIndex].style.display = 'none';
	images[currentImgIndex].style.display = 'block';
});

let currentImgIndex = 0;
let previousImgIndex = 0;
const images = document.querySelector('.images');
