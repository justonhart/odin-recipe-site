import img from './img/brick-wall.jpg';

export default function renderHome(content){
	content.innerHTML = '';

	const header = document.createElement('h1');
	header.innerText = 'Odin Restaurant';
	header.id = 'siteHeader';
	content.appendChild(header);

	const card = document.createElement('div');
	card.classList.add('card');
	
	const blurb = document.createElement('p');
	blurb.innerText = 'This is a blurb about our cool restaurant!';
	card.appendChild(blurb);

	const myImage = new Image();
	myImage.src = img;
	card.appendChild(myImage);

	content.appendChild(card);

};
