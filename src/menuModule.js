export default function renderMenu(content){
	//reset content
	content.innerHTML = '';

	//add menu header
	const header = document.createElement('h2');
	header.innerText = 'Our Menu';
	content.appendChild(header);
	
	//add menu card
	const menuCard = document.createElement('div');
	menuCard.classList.add('mainCard');
	menuCard.classList.add('flexColumn');
	menuCard.classList.add('shadowed');
	content.appendChild(menuCard);

	//create menu section
	const entreeSection = document.createElement('div');
	entreeSection.classList.add('menuSection');
	menuCard.appendChild(entreeSection);

	const entreeSectionHeader = document.createElement('h3');
	entreeSectionHeader.innerText = 'Entrees';
	entreeSection.appendChild(entreeSectionHeader);

	//create menu items
	entreeSection.appendChild(createMenuRow('Hipster Meat', 60));
	entreeSection.appendChild(createMenuRow('Organic Spaghetti', 35));
	entreeSection.appendChild(createMenuRow('Alley-grown Berries', 19));
}

function createMenuRow(item, price){
	const menuRow = document.createElement('div');
	menuRow.classList.add('menuRow');

	const itemSpan = document.createElement('span');
	itemSpan.innerText = item;
	menuRow.appendChild(itemSpan);

	const priceSpan = document.createElement('span');
	priceSpan.innerText = price;
	menuRow.appendChild(priceSpan);

	return menuRow;
}
