import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl:'app.component.html'
})
export class AppComponent implements OnInit {

  pokemonList: Pokemon[] = POKEMONS;
  pokemon = POKEMONS[3];

  ngOnInit() {
      console.table(this.pokemonList);
      this.selectPokemon(this.pokemon);
  }

  selectPokemon(pokemon: Pokemon){
    console.log(`Vous avez cliqué sur le pokémon ${pokemon.name}`);
  }
}
