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
    image: 'assets/img/proyectos/api-sistema/01.png'
  },
  {
    id: 2,
    image: 'assets/img/proyectos/api-sistema/02.png'
  },
  {
    id: 3,
    image: 'assets/img/proyectos/api-sistema/03.png'
  },
  {
    id: 4,
    image: 'assets/img/proyectos/api-sistema/04.png'
  }
];

@Component({
  selector: 'app-detalles-api-sistema-venta',
  imports: [
    MatDialogModule,
    MatButtonModule,
    CarouselComponent,
    MatDividerModule
  ],
  templateUrl: './detalles-api-sistema-venta.component.html',
  styleUrl: './detalles-api-sistema-venta.component.scss'
})
export class DetallesApiSistemaVentaComponent {
  public carouselData: ICarouselItem[] = CAROUSEL_DATA_ITEMS; // Datos para el carrusel
}
