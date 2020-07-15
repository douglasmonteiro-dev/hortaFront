import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'PokeApp';
  pokemons: Array<any> = [ ];
  pokemonsPorPagina = 0;
  total = 0;
  proximo: string = null;
  anterior: string = null;
  paginas = 0;
  showSearchInput: boolean;

  constructor() {
    // this.listar();
  }

  ngOnInit() {
  }
  // onScroll() {
  //   if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
  //     this.proximaPagina();
  //   }
  // }
  setPokemonsPorPagina() {
    this.paginas = this.total / this.pokemonsPorPagina;
  }

  // listar() {
  //   this.pokeapi.lista()
  //   .subscribe((dados: HttpResponse<any>) => {
  //     const response = dados.body;
  //     this.pokemons = response.results ;
  //     this.total = response.count;
  //     this.proximo = response.next;
  //     this.anterior = response.previous;
  //   });
  // }
  // proximaPagina() {
  //   this.pokeapi.consulta(this.proximo)
  //   .subscribe((dados: HttpResponse<any>) => {
  //     const response = dados.body;
  //     this.pokemons = [...this.pokemons, ...response.results];
  //     this.total = response.count;
  //     this.proximo = response.next;
  //     this.anterior = response.previous;
  //   });
  // }
  // paginaAnterior() {
  //   this.pokeapi.consulta(this.anterior)
  //   .subscribe((dados: HttpResponse<any>) => {
  //     const response = dados.body;
  //     this.pokemons = response.results ;
  //     this.total = response.count;
  //     this.proximo = response.next;
  //     this.anterior = response.previous;
  //     window.scroll(0, 0);
  //   });
  // }
  scrollTop() {
    window.scroll(0, 0);
  }
  toggleSearch() {
    this.showSearchInput = !this.showSearchInput;
  }
}
