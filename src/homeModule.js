import restaurantImageSrc from './img/brick-wall.jpg';
import meatImageSrc from './img/hipster-meat.jpg';
import pastaImageSrc from './img/pasta.jpg';
import dessertImageSrc from './img/dessert.jpg';

export default function renderHome(content){

	//reset content
	content.innerHTML = '';

	//add homepage header
	const header = document.createElement('h1');
	header.innerText = 'Odin Restaurant';
	header.id = 'siteHeader';
	content.appendChild(header);

	//create welcome blurb w/ image
	const card = document.createElement('div');
	card.classList.add('mainCard');
	card.classList.add('shadowed');
	content.appendChild(card);
	
	const blurb = document.createElement('p');
	blurb.innerText = 'This is a blurb about our cool restaurant!';
	card.appendChild(blurb);

	const restaurantImage = new Image();
	restaurantImage.src = restaurantImageSrc;
	card.appendChild(restaurantImage);



	//create food pics 
	const foodPics = document.createElement('div');
	foodPics.classList.add('flexRow');
	content.appendChild(foodPics);
	
	const meatCard = createFoodCard(meatImageSrc, 'Try our new hipster meat!');
	foodPics.appendChild(meatCard);

	const pastaCard = createFoodCard(pastaImageSrc, 'We have delicious spaghetti options!');
	foodPics.appendChild(pastaCard);

	const dessertCard = createFoodCard(dessertImageSrc, 'Buy our overpriced berries!');
	foodPics.appendChild(dessertCard);

};

function createFoodCard(imageSrc, text){
	const foodCard = document.createElement('div');
	foodCard.classList.add('foodCard');
	foodCard.classList.add('shadowed');

	const foodImage = new Image();
	foodImage.src = imageSrc;
	foodCard.appendChild(foodImage);

	const foodCardText = document.createElement('div');
	foodCardText.innerText = text;
	foodCardText.classList.add('foodCardText');
	foodCard.appendChild(foodCardText);
	return foodCard;
}
