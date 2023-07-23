import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemon-list';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  getPokemonList(): Pokemon[]{
    return POKEMONS;
  }

  getPokemonById(pokemonId: number): Pokemon|undefined {
    return POKEMONS.find(pokemon => pokemon.id == pokemonId);
  }

  getPokemonTypeList(): string[] {
    return [
      'Eau',
      'Plante',
      'Feu',
      'Poison',
      'Electrik',
      'Sol',
      'Psy',
      'Spectre',
      'Vol',
      'Dragon',
      'Insecte'
    ];
  }
}
