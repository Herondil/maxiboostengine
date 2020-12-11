//import ....

tilesetLocation 	= "Tileset_48x48_1.png";

let tilesetElem = new Image();
tilesetElem.src = tilesetLocation;

tilesetElem.onload = () => {
	let interiorTileset = {
		img 		: tilesetElem,
		width 		: 480,
		height 		: 480
	}
	let floorTile = {
		tileset 	: interiorTileset,
		nameInMap	: "sol",
		width		: 48,
		height		: 48,
		line 		: 4,
		column		: 2
	}
	let wallTile = {
		tileset 	: interiorTileset,
		nameInMap	: "mur",
		width		: 48,
		height		: 48,
		line 		: 2,
		column		: 2
	}
	let houseTilemap = {
		array	: 	[
						["mur","mur","mur"],
						["sol","sol","sol"],
						["sol","sol","sol"]
					], //le tableau de tableau
		tileset : interiorTileset,
		lines   : 3,
		columns	: 3,
		tiles   : [floorTile,wallTile]
	}
	
	backgroundColor = "black";
	
	tilemapToRender = houseTilemap;
	
	StartGame();
}