import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Horta';
  temperatura = 0;
  temperaturaMedia = 0;
  umidade = 0;
  iluminacao: string = null;
  rega: string = null;
  paginas = 0;
  showSearchInput: boolean;


  constructor() {
  }

  ngOnInit() {
  }
  onScroll() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      // this.proximaPagina();
    }
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
