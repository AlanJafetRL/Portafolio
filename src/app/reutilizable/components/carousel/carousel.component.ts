import { Component, Input, OnInit } from '@angular/core';
import { ICarouselItem } from './icarousel-item.metadata';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements OnInit {

  /**
   * Propiedades de entrada del componente CarouselComponent
   * @param height Altura del carrusel, por defecto 650px.
   * @param isFullScreen Indica si el carrusel ocupa toda la pantalla, por defecto false.
   * @param items Lista de elementos del carrusel, cada uno implementa la interfaz ICarouselItem.
   */
  @Input() height = 450;
  @Input() isFullScreen = true;
  @Input() items: ICarouselItem[] = [];

  public finalHeight: string | number = 0;  // Altura final del carrusel, puede ser un número o una cadena (ejemplo: '100vh').
  public currentPosition = 0; // Posición actual del carrusel, inicia en 0 (primer elemento).

  /**
   * Constructor del componente CarouselComponent.
   * Inicializa la altura final del carrusel dependiendo de si es de pantalla completa o no.
   */
  constructor() {
    this.finalHeight = this.isFullScreen ? '100%' : `${this.height}px`;
  }

  ngOnInit(): void {
    this.items.map((i, index) => {  // Asigna un índice a cada elemento del carrusel
      i.id = index; // Asigna un ID único a cada elemento basado en su posición en el array
      i.marginLeft = 0; // Inicializa el margen izquierdo de cada elemento a 0
    });
  }

  /**
   * Establece la posición actual del carrusel.
   * Actualiza el margen izquierdo del primer elemento para reflejar la posición actual.
   * @param position Posición actual del carrusel.
   */
  setCurrentPosition(position: number) {
    this.currentPosition = position;  // Actualiza la posición actual del carrusel
    const item = this.items.find(i => i.id === 0);  // Busca el primer elemento del carrusel (id 0) y actualiza su margen izquierdo
    if (item) item.marginLeft = -100 * position;  // Calcula el margen izquierdo basado en la posición actual
  }

  /**
   * Establece la siguiente posición del carrusel.
   * Si la posición siguiente es válida, actualiza el margen izquierdo del primer elemento.
   */
  setNext() {
    let finalPercentage = 0;  // Por defecto, el porcentaje final es 0 (primer elemento visible).
    let nextPosition = this.currentPosition + 1;  // Calcula la siguiente posición del carrusel.

    if (nextPosition <= this.items.length - 1) {  // Si la siguiente posición es válida (dentro del rango de elementos del carrusel)
      finalPercentage = -100 * nextPosition;  // Calcula el porcentaje final basado en la siguiente posición.
    } else {
      nextPosition = 0; // Si la siguiente posición excede el número de elementos, vuelve al inicio (posición 0).
    }

    const item = this.items.find(i => i.id === 0);  // Busca el primer elemento del carrusel (id 0) y actualiza su margen izquierdo.
    if (item) item.marginLeft = finalPercentage;  // Calcula el margen izquierdo basado en la siguiente posición.

    this.currentPosition = nextPosition;  // Actualiza la posición actual del carrusel a la siguiente posición.
  }

  /**
   * Establece la posición anterior del carrusel.
   * Si la posición anterior es válida, actualiza el margen izquierdo del primer elemento.
   */
  setBack() {
    let finalPercentage = 0;  // Por defecto, el porcentaje final es 0 (primer elemento visible).
    let backPosition = this.currentPosition - 1;  // Calcula la posición anterior del carrusel.

    if (backPosition >= 0) {  // Si la posición anterior es válida (no menor que 0)
      finalPercentage = -100 * backPosition;  // Calcula el porcentaje final basado en la posición anterior.
    } else {
      backPosition = this.items.length - 1; // Si la posición anterior es menor que 0, vuelve al último elemento del carrusel.
      finalPercentage = -100 * backPosition;  // Calcula el porcentaje final basado en la última posición.
    }

    const item = this.items.find(i => i.id === 0);  // Busca el primer elemento del carrusel (id 0) y actualiza su margen izquierdo.
    if (item) item.marginLeft = finalPercentage;  // Calcula el margen izquierdo basado en la posición anterior.

    this.currentPosition = backPosition;  // Actualiza la posición actual del carrusel a la posición anterior.
  }

}
