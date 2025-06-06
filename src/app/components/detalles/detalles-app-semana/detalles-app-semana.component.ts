import { Component } from '@angular/core';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

import { ICarouselItem } from '../../../reutilizable/components/carousel/icarousel-item.metadata';
import { CarouselComponent } from '../../../reutilizable/components/carousel/carousel.component';

export const CAROUSEL_DATA_ITEMS: ICarouselItem[] = [
  {
    id: 1,
    image: 'assets/img/proyectos/app-semana7/01.jpeg'
  },
  {
    id: 2,
    image: 'assets/img/proyectos/app-semana7/02.png'
  },
  {
    id: 3,
    image: 'assets/img/proyectos/app-semana7/03.jpeg'
  },
  {
    id: 4,
    image: 'assets/img/proyectos/app-semana7/04.jpeg'
  },
  {
    id: 5,
    image: 'assets/img/proyectos/app-semana7/05.jpeg'
  },
  {
    id: 6,
    image: 'assets/img/proyectos/app-semana7/06.jpeg'
  },
  {
    id: 7,
    image: 'assets/img/proyectos/app-semana7/07.jpeg'
  }
];

@Component({
  selector: 'app-detalles-app-semana',
  imports: [
    MatDialogModule,
    MatButtonModule,
    CarouselComponent,
    MatDividerModule
  ],
  templateUrl: './detalles-app-semana.component.html',
  styleUrl: './detalles-app-semana.component.scss'
})
export class DetallesAppSemanaComponent {
  public carouselData: ICarouselItem[] = CAROUSEL_DATA_ITEMS; // Datos para el carrusel
}
