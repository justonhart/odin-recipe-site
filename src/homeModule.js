import img from './RestaurantImage.png';

export default function renderHome(content){
	content.innerHTML = '';

	const myImage = new Image();
	myImage.src = img;

	content.appendChild(myImage);
};
