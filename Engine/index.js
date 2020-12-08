let ctx,
	width,
	height;
	
//le dernier
let lastClick = {
	x : undefined,
	y : undefined
}

function StartGame(){
	canvas_generator();
	loadImgs();
}

function loadImgs(){
	
}

function canvas_generator(){
	
	//créer l'élément
	let c = document.createElement("canvas");
	ctx = c.getContext("2d");
	
	
	c.addEventListener('click', (event) => {
		let elemLeft 	= c.offsetLeft,
			elemTop 	= c.offsetTop;
		
		let xClick 		= event.pageX - elemLeft,
			yClick 		= event.pageY - elemTop;
			
		lastClick.x = xClick;
		lastClick.y = yClick;
		//console.log(xClick, yClick);
	});
	
	//configurer le canvas
	//changer hauteur/largeur
	c.setAttribute("width",800);
	c.setAttribute("height",600);
	
	//ajouter l'élément à la page
	//c va être un enfant de "Game"
	document.getElementById("Game").appendChild(c);
	return "ok";
}

function afficher_background(imageLocation){
	//créér l'image, un élément image
	let img = new Image();
	img.src = imageLocation;

	img.onload  = () => {
		//afficher cette image dans le canvas
		ctx.drawImage(img,0,0,800,600);
	};
}

function renderSprite(imageLocation, position){
	//créér l'image, un élément image
	let img = new Image();
	img.src = imageLocation;

	img.onload  = () => {
		//afficher cette image dans le canvas
		ctx.drawImage(img,0,0,96,64,position.x,position.y,96,64);
	};
}

function renderBackgroundColor(color){
	ctx.fillStyle = color;
	ctx.fillRect(0, 0, 800, 600);
}