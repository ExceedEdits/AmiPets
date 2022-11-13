import { Component } from '@angular/core';
import { IAnimal } from '../models/IAnimal.model';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  titulo: string = 'Amigos';

  listaAmigos: IAnimal[] = [
      {

        nome: 'Spike',
        amigo: 'Cachorro',
        raca: 'Husky',
        sexo: 'Macho',
        idade: '2 Anos',
        aparencia: 'https://i.pinimg.com/564x/b9/33/5b/b9335b1248794bd27fa5e34f406e9f12.jpg',
        paginas: ''
      },
      {

        nome: 'Spike',
        amigo: 'Cachorro',
        raca: 'Husky',
        sexo: 'Macho',
        idade: '2 Anos',
        aparencia: 'https://i.pinimg.com/564x/b9/33/5b/b9335b1248794bd27fa5e34f406e9f12.jpg',
        paginas: ''
      },
      {

        nome: 'Spike',
        amigo: 'Cachorro',
        raca: 'Husky',
        sexo: 'Macho',
        idade: '2 Anos',
        aparencia: 'https://i.pinimg.com/564x/b9/33/5b/b9335b1248794bd27fa5e34f406e9f12.jpg',
        paginas: ''
      },
      {

        nome: 'Spike',
        amigo: 'Cachorro',
        raca: 'Husky',
        sexo: 'Macho',
        idade: '2 Anos',
        aparencia: 'https://i.pinimg.com/564x/b9/33/5b/b9335b1248794bd27fa5e34f406e9f12.jpg',
        paginas: ''
      }
    ];

}
