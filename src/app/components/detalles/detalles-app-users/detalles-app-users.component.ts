import { Component, OnInit } from '@angular/core';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

import { ICarouselItem } from '../../../reutilizable/components/carousel/icarousel-item.metadata';
import { CarouselComponent } from '../../../reutilizable/components/carousel/carousel.component';

export const CAROUSEL_DATA_ITEMS: ICarouselItem[] = [
  {
    id: 1,
    image: 'assets/img/proyectos/app-users/01.jpeg'
  },
  {
    id: 2,
    image: 'assets/img/proyectos/app-users/02.jpeg'
  },
  {
    id: 3,
    image: 'assets/img/proyectos/app-users/03.jpeg'
  },
  {
    id: 4,
    image: 'assets/img/proyectos/app-users/04.jpeg'
  },
  {
    id: 5,
    image: 'assets/img/proyectos/app-users/05.jpeg'
  },
  {
    id: 6,
    image: 'assets/img/proyectos/app-users/06.jpeg'
  },
  {
    id: 7,
    image: 'assets/img/proyectos/app-users/07.jpeg'
  }
];


@Component({
  selector: 'app-detalles-app-users',
  imports: [
    MatDialogModule,
    MatButtonModule,
    CarouselComponent,
    MatDividerModule
  ],
  templateUrl: './detalles-app-users.component.html',
  styleUrl: './detalles-app-users.component.scss'
})
export class DetallesAppUsersComponent {
  public carouselData: ICarouselItem[] = CAROUSEL_DATA_ITEMS; // Datos para el carrusel

}
