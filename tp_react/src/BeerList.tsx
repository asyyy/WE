import * as React from 'react';
import Beer from './Beer';

interface Props { }

interface State {
    beerlist: string[];
    value: string;
};

export default class BeerList extends React.Component<Props, State> {
    state: State = {
        value: '',
        beerlist: ["Goudale", "Pelforth", "1664", "Embuscade", "Karmeliet Triple"]
    };
    /**
     * Supprime un élément de l'attribut beerlist
     * @param find 
     */
    supp = (find: string) => {
        this.setState({
            beerlist: this.state.beerlist.filter((item) => item !== find)
        });
    };
    /**
     * Ajout un élément à l'attribut beerlist
     */
    ajout() {
        this.setState(prevState => ({
            beerlist: [...prevState.beerlist, this.state.value]
        }));
    };

    render() {
        return (
            <div>
                <label>
                    Rajouter une bière :
                    <input
                        type="text"
                        value={this.state.value}
                        onChange={(event) => { this.setState({ value: event.target.value }) }}
                        placeholder="Shazam" />
                </label>
                <button onClick={() => this.ajout()}>Ajouter</button>

                {this.state.beerlist.map((item, index) => {
                    return <li key={index}>
                        <Beer id={index} name={item} />
                        <button onClick={() => this.supp(item)}>Supprimer</button>
                    </li>
                })}
            </div>
        );
    }
}