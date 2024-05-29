import img from './img/brick-wall.jpg';

export default function renderHome(content){
	let card = document.createElement('div');
	card.classList.add('card');
	card.innerText = 'This is a blurb about my restaurant';
	
	const myImage = new Image();
	myImage.src = img;
	card.appendChild(myImage);

	content.innerHTML = '';
	content.appendChild(card);

};
