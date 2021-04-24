# Rapport tp React

## Pour lancer le projet
Pré-réquis : Avoir installer Node.js

Dans le dossier contenant le projet, faire "npm start".

## Explication du projet React

Le principe du projet est d'avoir un composant qui permet de gérer une liste d'élément. J'ai un donc créer un composant Class qui s'occupe de la liste et de sa gestion "beerList.tsx" et un composant Fonctionnel "beer.tsx" qui représente une bière.

### Le composant Beer

Une bière possède 2 attributs, son id et son nom. On les défini en tant que Props du composant avec 
```typescript=
interface Props {
  id: number;
  name: string
}
```

Il faut aussi lui donner de quoi se représenter en HTML quand un autre composant l'appelera, pour cela on ajoute : 
```typescript=
const Beer: React.FunctionComponent<Props> = (props) => {
  return <span>ID : {props.id} | Name : {props.name}</span>;
};
```
Quand un autre composant voudra appelé ce composant beer à l'aide d'une balise <Beer/>, il devra juste lui donner en plus un id et un nom comme ceci : 

```htmlmixed=
 <Beer id={idDeLaBière} name={nomDeLaBiere} />
```

## Le composant BeerList

BeerList étant une liste (incroyable), il lui faut donc un attribut liste qu'on définit dans son State : 

```typescript=
interface State {
    beerlist: string[];
    value: string;
};
```
L'attribut "value" servira comme valeur pour une balise <input> permettant l'ajout d'un élément à la "beerList".

J'ai donc créé 2 fonctions permettant d'ajouter et de supprimer un élément de la liste. this.SetState permet de modifier l'objet state(Interface State), il faut préciser quels attributs on veut modifier et la modification à effectuer.

```typescript=
supp = (find: string) => {
        this.setState({
            beerlist: this.state.beerlist.filter((item) => item !== find)
        });
    };
ajout() {
        this.setState(prevState => ({
            beerlist: [...prevState.beerlist, this.state.value]
        }));
    };
```
Pour afficher ce composant on passe par une fonction render() qui va retourner un structure HTML du composant.
```typescript=
render() {
        return (
            [...]
        );
    }
```

Le bouton d'input relie directement la valeur "value" du state à sa propre valeur, et quand sa valeur change, celle du state aussi.

```htmlembedded=
<input
    type="text"
    placeholder="Shazam"
    value={this.state.value}
    onChange={(event) => 
    { this.setState({ value: event.target.value }) }}
/>
```
