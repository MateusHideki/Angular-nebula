import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { PokemonDTO } from '../models/pokemons/pokemonDTO';

@Injectable()
export class PokemonService {

  constructor(private http: HttpClient) { }
  
    getPokemonData(): Observable<PokemonDTO> {
        return this.http.get<PokemonDTO>(`https://pokeapi.co/api/v2/pokemon-species/?limit=802`);
    }
}
