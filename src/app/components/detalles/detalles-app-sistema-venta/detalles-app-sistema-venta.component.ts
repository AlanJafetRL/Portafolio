import { Component } from '@angular/core';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

import { ICarouselItem } from '../../../reutilizable/components/carousel/icarousel-item.metadata';
import { CarouselComponent } from '../../../reutilizable/components/carousel/carousel.component';


export const CAROUSEL_DATA_ITEMS: ICarouselItem[] = [
  {
    id: 1,
    image: 'assets/img/proyectos/app-sistema/01.jpeg'
  },
  {
    id: 2,
    image: 'assets/img/proyectos/app-sistema/02.jpeg'
  },
  {
    id: 3,
    image: 'assets/img/proyectos/app-sistema/03.jpeg'
  },
  {
    id: 4,
    image: 'assets/img/proyectos/app-sistema/04.jpeg'
  },
  {
    id: 5,
    image: 'assets/img/proyectos/app-sistema/05.jpeg'
  },
  {
    id: 6,
    image: 'assets/img/proyectos/app-sistema/06.jpeg'
  },
  {
    id: 7,
    image: 'assets/img/proyectos/app-sistema/07.jpeg'
  },
  {
    id: 8,
    image: 'assets/img/proyectos/app-sistema/08.jpeg'
  },
  {
    id: 9,
    image: 'assets/img/proyectos/app-sistema/09.jpeg'
  },
];

@Component({
  selector: 'app-detalles-app-sistema-venta',
  imports: [
    MatDialogModule,
    MatButtonModule,
    CarouselComponent,
    MatDividerModule
  ],
  templateUrl: './detalles-app-sistema-venta.component.html',
  styleUrl: './detalles-app-sistema-venta.component.scss'
})
export class DetallesAppSistemaVentaComponent {
  public carouselData: ICarouselItem[] = CAROUSEL_DATA_ITEMS; // Datos para el carrusel
}
