# Rapport Projet WE

## Introduction

Dans le cadre de l'UE Web Engineering de ma première année de master Ingénierie Logiciel à l'Université de Rennes, j'ai dû réalisé un projet dont l'idée principale est de partir d'une application Web existante et d'ajouter une fonctionnalité au front.
Nous avions la possibilité de partir d'un projet de notre encadrant [Oliver Barais](https://github.com/barais/doodlestudent/tree/main/front), d'un projet personnel ou bien du projet open source [RealWorld](https://medium.com/@ericsimons/introducing-realworld-6016654d36b5). J'ai choisi de partir du projet [RealWorld en React](https://github.com/khaledosman/react-redux-realworld-example-app) car il me permettait de faire du React en JS, technologie que j'utilise aussi dans le cadre d'une autre UE  de mon master.

## Installer et lancer

Pré-requis: avoir [Node.js](https://nodejs.org/en/)

* Clone ce repo.
* ```npm install``` pour installer toutes les dépendances.
* ```npm start``` pour lancer le serveur local.

## Mon composant : le New York Times

### Le principe 
L'idée de mon composant est d'ajouter un petit menu qui présentes différents types d'articles du New York Times : les plus récents, les plus consultés, ou ceux qui reçoivent le plus de mail.

### Le visuel

Composant Seul          |  Intégration dans la page
:-------------------------:|:-------------------------:
![](https://i.imgur.com/jgJDjOA.png)|![](https://i.imgur.com/JzP71WX.png)



### Le code
*Chemin vers les classes "./src/components/Home/"*

J'ai créé 2 classes : la première (`MenuNYTimes.js`) représente le menu en général et la deuxième (`ListOfArticles.js`) permet la gestion et l'affichage de liste des articles.
J'ai réalisé mon interface à l'aide de [Semantic Ui React](https://react.semantic-ui.com/), la plupart de mes balises proviennent de cette bibliothèque.

![](https://i.imgur.com/k5cLDrE.jpg)

### MenuNYTimes.js

Ce composant possède 2 attributs dans son state : 
* `listArticles`, une liste qui permet de stocker tous les articles que l'on va récupérer grâce à l'[API du New York Times](https://developer.nytimes.com/).
* `activeItem` permet une animation des 3 boutons "Recent/Popular/Polemic". Contiendra le nom de l'un de ces boutons, celui sélectionné aura un fond foncé et une petite flèche qui pointera vers le bas.
 
Et 4 fonctions : 

* `makeApiLink(category)` sert à créer la bonne requête à effectuer vers l'API. Le paramètre *category* représente le type d'articles souhaité (Recent/Popular/Polemic), il modifiera dans le state l'état de `activeItem` et retourne le string de l'url correspondant. La clé de l'API est stocké dans un fichier .env pour ne pas l'afficher en brut dans le code et je n'ai pas réussi à la sécuriser d'avantage.

* `loadArticles(categoy)` sert à effectuer la requête de l'API, il génère la bonne url grâce à `makeApiLink(category)`. La réponse de la requête est un objet que l'on passe en JSON. En le parsant et on récupère uniquement la liste des articles que l'on stocke dans l'attribut *listArticles* du State. 

* `componentDidMount()` permet d'effectuer une action au lancement du composant. Dans mon cas, je charge directement le composant en effectuant une requête qui va chercher les articles récents.

* `render()` permet de s'occuper de comment le composant s'affiche à l'écran à l'aide de balise. Ici, j'ai utilisé la balise `<Menu fluid vertical>` de la bibliothèque Semantic Ui React *(fluid -> adapte sa taille à la page, vertical -> un menu du haut vers le bas)*. Ce menu est composé de 3 parties : son titre (avec le logo et "NYTimes"), les boutons pour sélectionner le type d'article, et la liste des articles. La partie bouton est un autre menu où chaque élément est cliquable et exécutera `loadArticles(category)`, mettant à jour les articles affichés plus bas dans le menu.

### ListOfArticles.js

La balise `<ListOfArticles>` est appelé dans `MenuNYTimes.js` pour gérer et intéragir la liste des articles. Il l'appelle avec 2 props `<ListOfArticles listOfArticles={listArticles} activeItem={activeItem}/>` : la liste des articles, et le type d'article défini dans ``MenuNYTimes.js``. 

* `rightPathToImage(element)` permet d'aller rechercher l'image d'un article. Le chemin vers l'image n'est pas le même selon le type de l'article, d'où la nécessité de créer cette fonction. Selon le type de l'article, la fonction renvoie une balise `<Image .../>` avec le bon chemin, sinon une image pré-défini. Le paramètre `element` correspond à l'article désiré.

* `render()` : le composant est placé dans un `<Container />` ce qui permet d'éviter d'avoir des overflows sur les côtés (le texte qui déborde sur le reste de la page). Mais aussi pour avoir une boite de taille défini et ainsi une scrollbar pour dérouler tous les articles et ne pas avoir une page web qui scroll vers l'infini. À l'intérieur, j'utilise une `<List/>` où chaque `<List.Item ...>` est un article. Grâce aux possibilités qu'offre Semantic UI, on peut facilement mettre que la case de chaque article est cliquable et renvoie vers l'article original ainsi que la structure de la case : titre en haut, description en bas.

## Difficultés rencontrés

* Ma première difficulté a été de bien comprendre la structure du code de base et surtout de savoir où et comment placer mon composant. J'ai du tester en plaçant du code random et en bougeant des éléments du code original pour mieux le comprendre. 
* J'ai commencé à coder l'aspect graphique (``render()``) de mes composants sans me renseigner d'avantage sur des bibliothèques pouvant m'aider. N'ayant pas beaucoup d'expérience avec les balises HTML, j'ai donc d'abord passé beaucoup de temps à comprendre comment les utiliser et commencer à faire mes composants. En effectuant des recherches sur des façons de détailler mes composants (les boutons qui changent le type de la liste affiché, par exemple), j'ai découvert  Semantic Ui React et décidé de tout refaire à l'aide de cette bibliothèque.

* J'ai beaucoup de mal à gérer le centrage de mes balises et le fait qu'il ne dépasse pas sur les autres composants. Difficulté facilement visible sur le titre du menu où je n'ai pas réussi à bien centrer quel que soit la taille de la page, le titre "NYTimes" et le logo ainsi que les boutons qui eux ne s'adaptent pas à la taille de la page et déborder quand on décide de réduire la page horizontalement.

* La documentation fournit pas le New York Times sur ses API n'est absolument pas à jour. La description des objets rendus par une requête ne correspond pas toujours à ce que l'on reçoit. Par exemple, pour aller chercher les images d'un article, je me suis rendu compte que les balises ne sont pas toujours celle défini dans la doc.

Chemin selon la [doc](https://developer.nytimes.com/docs/most-popular-product/1/routes/viewed/%7Bperiod%7D.json/get)(en partant de ViewedArticle) : `element.media.['media-metadata'][0].url`.
Chemin réel : ``element.multimedia[0].url``.

## Point final

Ce projet m'a permis de me rendre compte de la difficulté de devoir rentrer dans un code déjà existant alors que je n'ai pas exploité tout ce qu'il proposait (Store). L'importance de fragmenté son code en plusieurs composants, sans cela, j'aurais probablement mis beaucoup plus de temps à comprendre le code original. Mais aussi l'importance de bien définir son projet à l'avance pour se renseigner sur des bibliothèques déjà existantes pouvant faire gagner beaucoup de temps et permettant possiblement d'avoir un meilleur résultat que ce que l'on voulait.

