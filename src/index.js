import './style.css';
import renderHome from './homeModule.js';
import renderMenu from './menuModule.js';
import renderAbout from './aboutModule.js';

const content = document.getElementById('content');

renderMenu(content);

document.getElementById('home').addEventListener('click', () => {
	renderHome(content);
});

document.getElementById('menu').addEventListener('click', () => {
	renderMenu(content);
});

document.getElementById('about').addEventListener('click', () => {
	renderAbout(content);
});
