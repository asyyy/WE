import { Component, OnInit } from '@angular/core';
import { Calendar } from 'primeng/calendar';
import { PokeAPIService } from '../poke-api.service';
import {PokeDetail, Pokemon} from '../pokemon';
import { ShareDetailService } from '../share-detail.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
  providers:[PokeAPIService]
})
export class MyComponentComponent implements OnInit {
  id = '' ;
  choose = '';
  pokedex: Pokemon[] = [];
  searchedPokemon = '';
  pokemon: Pokemon = new Pokemon('-1', 'None','');
  calendar!: Date;
  pokeDetail: PokeDetail | undefined;

  constructor(private service: PokeAPIService,
    private share: ShareDetailService) {
  
  }
  ngOnInit(): void {
    this.service.getPokemon().subscribe((truc) =>{
      truc.results.forEach((machin,index) => {
        this.pokedex.push(new Pokemon(index.toString(),machin.name,machin.url))
      })
    });
  }

  funcGo(): void{
    if(this.id != ''){
      this.service.getPokemonDetail(this.id).subscribe(machin => {
        this.pokeDetail = machin;
        this.share.setDetail(this.id);
      });

    }
  }

  onChange(): void{
    this.id = this.pokemon.id;
    this.choose = this.pokemon.name;
  }
}
