# Rapport Angular : Pokedemo

# Lancer le tp
Dans le répertoire pokdemon, exécuter dans un terminale la commande :
`ng serve`


---

# Suivi du tp étape par étape

## Q1/2 - Créer un composant et t'y lié, tu devras.
>my-component.compent => m-c.c [color=#ff0000]

Pour créer un composant, on exécute la command :
`ng generate component my-component`

On se retrouve donc dans notre projet, avec un dossier ``my-component`` comprenant une feuille de style CSS, le code HTML, le code TS, et des unitaires (le ``.spec.ts``).

![](https://i.imgur.com/s6pWhrm.png)


Pour relié un élément de la classe au code HTML, il faut déjà l'y ajouter. 
On rajoute donc un attribut ``id`` dans ``m-c.c.ts``
```javascript= 
export class MyComponentComponent implements OnInit {
  id = '' ;
}
```

Et une balise ``<input>`` dans le ``m-c.c.html`` :

```htmlmixed=
<input [(ngModel)]="id" placeholder="Ecris-ici"> {{id}}
```

Dans cette balise input, il faut lui dire d'aller chercher ``id`` dans le model grâce au paramètre ``[(ngModel)]``. ``placeholder`` permet quand à lui d'afficher un message dans la case (Je l'ai rajouté car ça me permettait de m'y retrouver dans le page produite). ``{{id}}`` permet lui de selectionner cette valeur; dans cet exemple on décide d'afficher la valeur.
> Sans texte :
![](https://i.imgur.com/T61Et8w.png)
> Avec texte : 
![](https://i.imgur.com/E9GteME.png)


Lorsque nous écrivons un mot dans la case, il est donc directement associé à l'attribut ``id`` et s'affiche en direct.

## Q3 - Input and readonly, a short story.

Pour obtenir un input en read-only, il existe une paramètre [readonly](https://www.w3schools.com/tags/att_input_readonly.asp) qu'il suffit d'ajouter dans la balise.
```htmlmixed=
<input readonly [(ngModel)]="id" placeholder="ReadOnly here">
```
>Sans texte : 
![](https://i.imgur.com/68McU5n.png)

>Avec texte : la case ReadOnly se remplit comme voulu et on ne peut pas écrire dedans.
>![](https://i.imgur.com/rbJUBTS.png)

## Q3Bis - XSSzilla VS King Angular

Pour éviter tout attaque XSS (injection de code), Angular va considérer tout le code comme non-fiable et va "nettoyer" le code comme par exemple en supprimant des balises ``<script>`` qui pourrait être passer dans un input.

En savoir plus : https://angular.io/guide/security

## Recherche dans une liste

## Q4 - Création de la classe Pokemon

Pour créer une nouvelle Pokemon, on exécute dans le terminale la commande : 
``ng g class pokemon``

Cela va ajouter un nouveau fichier ``Pokemon.ts`` comprenant la classe pokemon mais pour créer un objet de cette classe, il faut lui rajouter un constructeur : 

```javascript=
export class Pokemon {
  constructor(public id: string, public name: string) {
  }
}
```

## Q5 - Créer une liste à la main

Dans ``m-c.c.ts``, nous allons rajouter un nouvelle attribut``pokedex`` qui sera notre liste de pokemon.


```javascript=
export class MyComponentComponent implements OnInit {
  id = '' ;
  pokedex: Pokemon[] = [];
}
```

Pour remplir cette liste, on peut passer par un constructeur qui va s'occuper d'ajouter à cette liste les pokémons qu'on va créer à la main puis les lui rajouter ou directement initialiser la liste avec de nouveau objet Pokemon.

```javascript=
pokedex: Pokemon[] = [new Pokemon("4","Albator"),new Pokemon("5","Alibaba")];

constructor(){
    this.pokedex.push(new Pokemon("0","Truc"));
    this.pokedex.push(new Pokemon("1","Machin"));
    this.pokedex.push(new Pokemon("2","Al Capone"));
  }
```

## Q6 - Afficher la liste

L'affichage d'une liste peut se faire à l'aide des balises ``<li></li>`` et de la director ``*ngFor`` d'Angular qui permet boucler sur un array et d'injecter les éléments dans le DOM (Document Object Model).

```htmlmixed=
<li *ngFor="let poke of pokedex">{{poke.name}}</li>
```

*ngFor va chercher l'array pokedex dans le modèle et parcourir ses éléments tout en nous donnant la possibilité d'utiliser ses éléments sous le nom de ``poke``. Dans cet exemple, nous allons chercher pour chaque Pokémon son attribut name que nous affichons.

Pour créer une liste déroulante de selection de notre pokedex, on utilise la balise ``<select>`` avec à l'intérieur une balise `<option>` où l'on pourra utiliser \*ngFor car `<select>` n'est pas prévu pour l'affichage.
```htmlmixed= 
<select >
  <option *ngFor="let poke of pokedex">{{poke.name}}
  </option>
</select>
```
> ![](https://i.imgur.com/ztvEyCr.png)



## Q7 - "et dans les ténèbres les lier"

Pour liéer la sélection au modèle, il faut rajouter les paramètres `[(ngModel)]="pokemon"` dans `<select>` pour relié la valeur qui sera sélectionner à l'attribut ``pokemon`` du modèle et `[(ngValue)]="poke"`dans``<option>`` qui sera la valeur sélectionner.

```htmlmixed=
<select [(ngModel)]="pokemon" (change)="onChange()">
  <option  [ngValue]="poke" *ngFor="let poke of pokedex | filterPokemonPipe:'name':searchedPokemon">{{poke.name}}
  </option>
</select>
```

Au lieu d'aller chercher seulement l'id, j'ai cherché comment récupèrer plusieurs éléments de la liste. Pour cela, j'ai décidé de récupèrer directement le pokémon et de créer une fonction `onChange()` qui s'occupera de modifier tout les attributs souhaité dans le modèle(id, et choose dans ma classe).

```javascript=
export class MyComponentComponent implements OnInit {
  id = '' ;
  choose = '';
  pokedex: Pokemon[] = [];
  pokemon: Pokemon = new Pokemon('-1', 'None','');
  
  onChange(): void{
    this.id = this.pokemon.id;
    this.choose = this.pokemon.name;
  }
}
```
> ![](https://i.imgur.com/B2UCQBp.png)


## Q8 :
