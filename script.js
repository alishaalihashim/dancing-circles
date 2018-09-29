function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min; 
  //The maximum is exclusive and the minimum is inclusive
}

function changeCircle(index){
	const top= Math.random() * 100;
	const left= Math.random() * 100;
	const divX = document.querySelector(`#div-${index}`);
	divX.style.top=`${top}%`;
	divX.style.left=`${left}%`;

	const height= getRandomInt(20 , 300);

	divX.style.height=`${height}px`;
	divX.style.width=`${height}px`;

	divX.innerHTML = height;

	divX.style["font-size"] = `${height/3}px`;
	divX.style["border-width"] = `${height/50}px`;

	const red = parseInt(Math.random() * 256);
	const green = parseInt(Math.random() * 256);
	const blue = parseInt(Math.random() * 256);

	divX.style["border-color"] = `rgb(${red}, ${green}, ${blue})`;
	divX.style["color"] = `rgb(${red}, ${green}, ${blue})`;
}

function initialize(){
	let circleContainer = document.querySelector("#circle-container");
	for (let i = 0; i < Math.random()*13; i++) {
		circleContainer.innerHTML += ` <div id="div-${i}" class="circle"> </div> `;
		changeCircle(i);
		setInterval (function(){

			changeCircle(i);

		},2000);
	}
}












