const container = document.querySelector("#container");

const redPara = document.createElement("p");
redPara.textContent = "Hey I'm red!";
redPara.style.color = "red";
container.appendChild(redPara);

const blueHeaderThree = document.createElement("h3");
blueHeaderThree.textContent = "I'm a blue h3";
blueHeaderThree.style.color = "blue"
container.appendChild(blueHeaderThree);

const div = document.createElement("div");
div.style.border = "1px solid black";
div.style.backgroundColor = "pink";

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";
const para = document.createElement("p");
para.textContent = "ME TOO!";

div.appendChild(h1);
div.appendChild(para);

container.appendChild(div);
