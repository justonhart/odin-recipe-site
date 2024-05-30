export default function renderAbout(content){
	//clear content
	content.innerHTML = '';

	const header = document.createElement('h2');
	header.innerText = "About this site";
	content.appendChild(header);

	const para = document.createElement('p');
	para.innerText = 'This site was created as part of the Odin Project, a self-driven bootcamp for web development. The images used for this site are all royalty-free images pulled from Pixabay.com. For more information about this project, the Odin Project, or my other projects, send me an email at contact@justonh.art.';
	content.appendChild(para);
}
