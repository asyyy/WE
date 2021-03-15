
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;
	
	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.



	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
	this.onInteractionStart = function(dnd){
		this.currLineWidth = document.getElementById('spinnerWidth').value;
		this.currColour = document.getElementById('colour').value;
		if(document.getElementById("butLine").checked){
			this.currentShape = new Line(dnd.preX,dnd.preY,dnd.postX,dnd.postY,this.currColour,this.currLineWidth);
			console.log("Line");
		}else{
			var largeur = dnd.postX - dnd.preX;
			var hauteur = dnd.postY - dnd.preY;
			this.currentShape = new Rectangle(dnd.preX,dnd.preY,hauteur,largeur,this.currColour,this.currLineWidth);
			console.log("Rectangle");
		}
		console.log("Start");
	}.bind(this);

	this.onInteractionUpdate = function(dnd){
		if(this.currentShape != 0){
			if(document.getElementById("butLine").checked){
				this.currentShape.x2 = dnd.postX;
				this.currentShape.y2 = dnd.postY;
			}else{
				this.currentShape.hauteur = dnd.postX - dnd.preX;
				this.currentShape.largeur = dnd.postY - dnd.preY;			
			}
			//this.currentShape.paint(ctx);
		}

		
	}.bind(this);

	this.onInteractionEnd = function(dnd){
		
		console.log("End");
		drawing.listForme.push(this.currentShape);
		drawing.paint(ctx);
		this.currentShape = 0;
		//this.currentShape.paint(ctx);
		

	}.bind(this);


};


