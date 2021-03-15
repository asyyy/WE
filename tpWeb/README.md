# Rapport TP1 WE Javascript

## Q by Q

### Q1 :
Pour représenter les positions initiales j'ai créé les variables postX-Y et pour les positions finales postX-Y.

### Q2-3 : 
Les 3 événements à gérer sont : l'appuie du click de la souris dans le canvas, le déplacement de la souris quand celle-ci est pressée et le relâchement du bouton de la souris. J'ai donc créé une variable boolean "press" qui permet de savoir si le bouton de la souris est actionné.

Description rapide des fonctions événements :
```javascript=
this.push = function (evt){...}
```
* Quand push sera appelé alors "press" passe alors à true, on récupère donc la position initiale de la souris et on les donne à preX-Y.

```javascript=
this.move = function (evt){...}
```
* Ici, pour symboliser le fait qu'il y ait un déplacement, on regarde si "this.press" est true, dans ce cas, on récupère les coordonnées de la souris et on actualise postX-Y avec.

```javascript=
this.release = function (evt){...}
```
* Pour release, le principe est le même que pour `move` sauf qu'après actualiser les coordonnées on repasse `this.press` à false pour éviter que la fonction `move` ne continue de modifier les coordonnées.

### Q4 : 

Pour enregistrer chaque fonction auprès du canvas, j'ai simplement repris le code du google doc du TP et je les ai adapté à mon code. J'ai quand même recherché si le premier paramètre d'addEventListener était vraiment important étant donné que ce n'est qu'un string, et la réponse est oui. Il existe une liste de string bien précis relié à une action bien précise.

```javascript=
canvas.addEventListener('mousedown', this.maFctGérantLaPression, false);
canvas.addEventListener('mousemove', this.maFctGérantLeDéplacement, false);
canvas.addEventListener('mouseup', this.maFctGérantLeRelâchement, false);
```

### Q5 :

Avec les console.log voici ce qu'on obtient : 
![](https://i.imgur.com/7jxe1lc.png)

On observe bien le principe "press -> move -> release" avec les coordonnées qui se mettent bien à jour.

### Q6 :
 
Pour représenter les 4 classes décrites dans la question, j'ai simplement fait des functions correspondant aux descriptions et relié Rectangle/Line avec forme.

### Q7 : 

Au début de cette question j'ai simplement copié le code donner et tester pour voir ce qu'il manquait et je me suis aperçu qu'il manquait la modification de l'épaisseur et de la couleur. J'ai donc utilisé l'auto complétion sur `ctx` pour savoir s'il n'y avait pas un Setter comme pour `ctx.moveTo()` et j'ai trouvé `lineWidth()` et `strokeStyle()`

### Q8 : 
![](https://i.imgur.com/IeKbSc9.png)

### Q10-11:

Implémentation de ``onInteractionStart`` : 
* ``onInteractionStart`` va s'occuper d'initialiser les différentes valeurs de la forme. J'utilise donc la méthode getElementById pour aller récupérer la couleur, l'épaisseur et la forme que l'utilisateur a séléctionnées et ainsi initialiser ``currentShape`` par la bonne forme.

Implémentation de ``onInteractionUpdate`` : 
* Le but de Update est de mettre à jour les bonnes valeurs de coordonnées selon la forme : x2/y2 si c'est une Line, hauteur et largeur si c'est un Rectangle.

Implémentation de ``onInteractionEnd`` : 
* Va donc s'occuper d'ajouter la nouvelle forme finie à la liste des formes du dessein et va l'afficher sur le canvas. 



### Notes

Je n'ai pas utilisé de Getter vu que je n'ai pas de principe d'attribut privé. Et je me suis arrêter à cette question car je voulais vraiment commencer le TP Angular et que le tp fait globalement ce qui est demandé.
