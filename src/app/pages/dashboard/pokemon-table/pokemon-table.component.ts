import { Component, OnInit, Input } from '@angular/core';
import { PokemonDTO } from '../../../models/pokemons/pokemonDTO';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import { PokemonService } from '../../../services/pokemon-service.service';
import { FormatSpecies } from '../../../models/pokemons/formatSpecies';

@Component({
  selector: 'pokemon-table',
  templateUrl: './pokemon-table.component.html',
  styleUrls: ['./pokemon-table.component.scss']
})
export class PokemonTableComponent implements OnInit, OnChanges {

  public pokemonNames: Array<string> = [];
  public pokemonInterface: Array<FormatSpecies>;

  @Input() pokemon: PokemonDTO;

  pages: LocalDataSource;  
  
  settings = {
    columns: {
      url:{
        title: "Pokemon Number"
      },
      name: {
        title: 'Pokemon Name'
      }
    }
  };

  constructor() {
 }
    
    ngOnInit() {
      this.pages = new LocalDataSource(); 
      this.pages.load(this.pokemon.results);
      this.pokemon.results.forEach(element =>{ 
       element.url=element.url.replace("https://pokeapi.co/api/v2/pokemon-species/","").replace("/", "");
      });
    }
    
    ngOnChanges(){
    }  
}
