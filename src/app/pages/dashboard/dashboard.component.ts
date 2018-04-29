import { Component } from '@angular/core';
import { PokemonDTO } from '../../models/pokemons/pokemonDTO';
import { PokemonService } from '../../services/pokemon-service.service';
import { OnChanges, OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import {GridOptions} from "ag-grid";
import { PokemonTableComponent } from './pokemon-table/pokemon-table.component';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnChanges, OnInit{

  public pokemonData: PokemonDTO;  
  constructor(private pokemonService: PokemonService) {
     
  }

  ngOnInit() {
    this.pokemonService.getPokemonData().subscribe((data) =>{
      this.pokemonData = data;
    }); 
  }

  ngOnChanges(){
    
  }

}
