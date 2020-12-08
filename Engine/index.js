let ctx,
	width,
	height;
	
//le sprite animé
let img,
	currentSx = 0;
	
//le dernier
let lastClick = {
	x : undefined,
	y : undefined
}

let spriteLocation;

let frames = 0;

function StartGame(){
	canvas_generator();
	loadImgs();
	
	img = new Image();
	img.src = spriteLocation;
	
	img.onload  = () => {
		//démarer vraiment le jeu
		window.requestAnimationFrame(gameLoop);
	};
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

function renderSprite(imageLocation, position, sx){
	ctx.drawImage(img,sx,0,96,64,position.x,position.y,96,64);
}

function renderBackgroundColor(color){
	
	ctx.fillStyle = color;
	ctx.fillRect(0, 0, 800, 600);
}

function gameLoop(){
	
	//dessin des éléments
	ctx.clearRect(0, 0, 800,600)
	

	//dessiner le sprite de l'exercice
	renderSprite(spriteLocation, {x : 50, y : 50}, currentSx);
	
	//passer à l'image suivante du sprite
	// opération "modulo"
	if( (frames % 6) == 0 ){
		currentSx += 96;//aller à l'image clé suivante
		if( currentSx == 672) currentSx = 0; //revenir au début de l'animation
	}
	
	
	
	frames++;
	//boucle du jeu
	window.requestAnimationFrame(gameLoop);
}