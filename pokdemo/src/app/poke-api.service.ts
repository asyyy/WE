import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPokedex, PokeDetail } from './pokemon';
const url = 'https://pokeapi.co/api/v2/pokemon/'

@Injectable({
  providedIn: 'root'
})

export class PokeAPIService {
 
  constructor(private http: HttpClient) { }

  getPokemon() : Observable<IPokedex>{
    return this.http.get<IPokedex>(url);
  }
  getPokemonDetail(id : string) : Observable<PokeDetail>{
    return this.http.get<PokeDetail>(url+id+'/')
  }
}
