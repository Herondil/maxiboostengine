//import ....

shieldAnimationSpriteLocation 	= "img/noBKG_KnightShield_strip.png";
runAnimationSpriteLocation		= "img/noBKG_KnightRun_strip.png";


//Créer un objet d'animation particulier
//envoyer cet objet dans le moteur

let shieldSpriteElem = new Image();
shieldSpriteElem.src = shieldAnimationSpriteLocation;

let runSpriteElem	= new Image();
runSpriteElem.src 	= runAnimationSpriteLocation;

runSpriteElem.onload = () => {
	//démarer vraiment le jeu
	let runAnimation = {
		img 		 : runSpriteElem, 	// l'élément image
		frames		 : 8,			// Nombre d'image clées de l'animation
		currentSx 	 : 0, 			// décalage actuel
		currentSy 	 : 0,
		sxIncrement	 : 96,        	// le décalage entre les sx
		looping		 : true,		// annimation en boucle ?
		framesPerKey : 6, 			// nombre de frames avant de passer au sx suivant
		width		 : 96,
		height		 : 64
	};
	
	let knightActor = {
		animation : runAnimation,
		position : { x : 0, y : 40}	
	};
	
	ActorToRender = knightActor;
	
	StartGame();
}
/*
shieldSpriteElem.onload  = () => {
	//démarer vraiment le jeu
	let shieldAnimation = {
		img 		 : shieldSpriteElem, 	// l'élément image
		frames		 : 7,			// Nombre d'image clées de l'animation
		currentSx 	 : 0, 			// décalage actuel
		currentSy 	 : 0,
		sxIncrement	 : 96,        	// le décalage entre les sx
		looping		 : true,		// annimation en boucle ?
		framesPerKey : 6, 			// nombre de frames avant de passer au sx suivant
		width		 : 96,
		height		 : 64
	};
	AnimationToPlay = shieldAnimation;
	StartGame();
};
*/