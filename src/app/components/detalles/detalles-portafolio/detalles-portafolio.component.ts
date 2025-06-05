import { Component } from '@angular/core';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

import { ICarouselItem } from '../../../reutilizable/components/carousel/icarousel-item.metadata';
import { CarouselComponent } from '../../../reutilizable/components/carousel/carousel.component';

/**
 * Interfaz que define la estructura de los elementos del carrusel.
 * @interface ICarouselItem
 */
export const CAROUSEL_DATA_ITEMS: ICarouselItem[] = [
  {
    id: 1,
    image: 'assets/img/proyectos/app-portafolio/01.jpeg'
  },
  {
    id: 2,
    image: 'assets/img/proyectos/app-portafolio/02.jpeg'
  },
  {
    id: 3,
    image: 'assets/img/proyectos/app-portafolio/03.jpeg'
  },
  {
    id: 4,
    image: 'assets/img/proyectos/app-portafolio/04.png'
  }
];

@Component({
  selector: 'app-detalles-portafolio',
  imports: [
    MatDialogModule,
    MatButtonModule,
    CarouselComponent,
    MatDividerModule
  ],
  templateUrl: './detalles-portafolio.component.html',
  styleUrl: './detalles-portafolio.component.scss'
})
export class DetallesPortafolioComponent {
  public carouselData: ICarouselItem[] = CAROUSEL_DATA_ITEMS; // Datos para el carrusel
}
