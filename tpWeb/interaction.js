
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'
  this.canvas = canvas;
  this.interactor = interactor;
  this.preX=0;
  this.preY=0;

  this.postX=0;
  this.postY=0;

  this.press = false;

	// Developper les 3 fonctions gérant les événements
  this.push= function (evt){
    if(!this.press){
      this.press = true;
      var push = getMousePosition(canvas,evt);
      this.preX = push.x;
      this.preY = push.y;
      console.log("push "+this.preX + " " + this.preY);
      this.interactor.onInteractionStart(this);
    }
  }.bind(this);

  this.move = function(evt){
    if(this.press){
      var move = getMousePosition(canvas,evt);
      this.postX = move.x;
      this.postY = move.y;
      console.log("move " + this.postX + " " + this.postY);
      this.interactor.onInteractionUpdate(this);
    }
  }.bind(this);

  this.release = function(evt){
    if(this.press){
      var release = getMousePosition(canvas,evt);
      this.postX = release.x;
      this.postY = release.y;
      this.press = false;

      console.log("release "+this.postX + " " + this.postY);
      this.interactor.onInteractionEnd(this);
    }
  }.bind(this);

	// Associer les fonctions précédentes aux évènements du canvas.
  canvas.addEventListener('mousedown', this.push, false);
  canvas.addEventListener('mousemove', this.move, false);
  canvas.addEventListener('mouseup', this.release, false);

};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };



};



