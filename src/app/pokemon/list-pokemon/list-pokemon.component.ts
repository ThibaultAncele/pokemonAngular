import { Component, OnInit } from '@angular/core';
import { POKEMONS } from '../mock-pokemon-list';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html'
})
export class ListPokemonComponent implements OnInit {

  pokemonList: Pokemon[];
  auth: AuthService;
  
  constructor(private router: Router,
    private pokemonService: PokemonService,
    private authService: AuthService){}

  ngOnInit(){
    this.pokemonService.getPokemonList()
      .subscribe(pokemonList => this.pokemonList = pokemonList);
    this.auth = this.authService;
  }

  goToPokemon(pokemon: Pokemon){
    this.router.navigate([`/pokemon/${pokemon.id}`])
  }

  logoutFromList(){
    this.authService.logout();
  }
  
}
