const container = document.querySelector('#container'); 

const content = document.createElement('div'); 
content.classList.add('content'); 
content.textContent = 'This is the glorious text-content!'; 

const redPara = document.createElement('p'); 
redPara.classList.add('redPara'); 
redPara.style.color = 'red'; 
redPara.textContent = 'Hey I\'m red!'; 

const blueHeading = document.createElement('h3'); 
blueHeading.classList.add('blueHeading'); 
blueHeading.style.color = 'blue'; 
blueHeading.textContent = 'I\'m a blue h3!'; 

const box = document.createElement('div'); 
box.classList.add('box'); 
box.setAttribute('style', 'border: 2px solid black; background-color: pink; height: 200px;')

const divHeader = document.createElement('h1');
divHeader.classList.add('divHeader'); 
divHeader.textContent = 'I\'m in a div'; 

const divPara = document.createElement('p');
divPara.classList.add('divPara'); 
divPara.textContent = 'ME TOO!'; 

container.appendChild(content); 
container.appendChild(redPara); 
container.appendChild(blueHeading); 
container.appendChild(box); 
box.appendChild(divHeader);
box.appendChild(divPara);

const btn = document.querySelector('#btn'); 
btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
});