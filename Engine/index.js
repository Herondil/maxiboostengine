let ctx,
	width,
	height;
	
//l'objet
//animation typique
let animation = {
	img 		 : undefined, 	// l'élément image
	frames		 : 0,			// Nombre d'image clées de l'animation
	currentSx 	 : 0, 			// décalage actuel
	currentSy 	 : 0,
	sxIncrement	 : 0,        	// le décalage entre les sx
	looping		 : true,		// annimation en boucle ?
	framesPerKey : 0, 			// nombre de frames avant de passer au sx suivant
	width		 : 0,
	height		 : 0
};

let actor = {
	//animations : []
	animation : undefined,
	position : { x : 0, y : 0}
}

let ActorToRender;

//le dernier
let lastClick = {
	x : undefined,
	y : undefined
};

let inputsPressed = [];

let frames = 0;

function StartGame(){
	canvas_generator();
	loadImgs();
	window.requestAnimationFrame(gameLoop);
}

function loadImgs(){
	
}

//sert à créer le canvas et les evts clavier/souris
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
	
	document.body.addEventListener('keydown', (event) => {
		inputsPressed.push(event.code)
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

function renderAnimation(actor){
	ctx.drawImage(	actor.animation.img,
					actor.animation.currentSx,
					actor.animation.currentSy,
					actor.animation.width,
					actor.animation.height,
					actor.position.x,
					actor.position.y,
	actor.animation.width,actor.animation.height);
}

function renderBackgroundColor(color){
	
	ctx.fillStyle = color;
	ctx.fillRect(0, 0, 800, 600);
}

function gameLoop(){
	
	//dessin des éléments
	ctx.clearRect(0, 0, 800,600)
	
	//fond
	renderBackgroundColor("green");
	
	//dessiner le sprite de l'exercice
	renderAnimation(ActorToRender);
	
	//Si mon tableau contient "flèche de droite", alors on bouge de +1 en x
	console.log(inputsPressed);
	if(inputsPressed.indexOf("ArrowRight") != -1)
		ActorToRender.position.x += 10;
	
	//passer à l'image suivante du sprite
	// opération "modulo"
	if( (frames % ActorToRender.animation.framesPerKey) == 0 ){
		ActorToRender.animation.currentSx += ActorToRender.animation.sxIncrement;//aller à l'image clé suivante
		if( ActorToRender.animation.currentSx == (ActorToRender.animation.sxIncrement * (ActorToRender.animation.frames - 1) ) ){ 
			ActorToRender.animation.currentSx = 0; //revenir au début de l'animation
		}
	}	
	
	frames++;
	
	//on vide les touches
	inputsPressed = [];
	
	//boucle du jeu
	window.requestAnimationFrame(gameLoop);
}