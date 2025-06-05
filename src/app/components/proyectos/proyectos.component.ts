import { Component, Type } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card'
import { MatDividerModule } from '@angular/material/divider';

import { MatDialog } from '@angular/material/dialog';

import { DetallesAppUsersComponent } from '../detalles/detalles-app-users/detalles-app-users.component';
import { DetallesAppSistemaVentaComponent } from '../detalles/detalles-app-sistema-venta/detalles-app-sistema-venta.component';
import { DetallesApiSistemaVentaComponent } from '../detalles/detalles-api-sistema-venta/detalles-api-sistema-venta.component';
import { DetallesPortafolioComponent } from '../detalles/detalles-portafolio/detalles-portafolio.component';

@Component({
  selector: 'app-proyectos',
  imports: [
    MatButtonModule,
    MatCardModule,
    MatDividerModule
  ],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.scss'
})
export class ProyectosComponent {

  // Arreglo de componentes para los detalles de cada proyecto
  // Se utiliza Type<any>[] para permitir cualquier tipo de componente
  arregloDetalles: Type<any>[] = [
    DetallesAppUsersComponent,
    DetallesAppSistemaVentaComponent,
    DetallesApiSistemaVentaComponent,
    DetallesPortafolioComponent
  ]

  /**
   * Constructor del componente ProyectosComponent
   * @param dialog Inyecta el servicio MatDialog para abrir diálogos
   */
  constructor(
    private dialog: MatDialog,
  ) { }

  /**
   * Abre un diálogo con los detalles del proyecto seleccionado
   * @param proyecto Índice del proyecto en el arreglo de detalles
   */
  abrirDialogoDetalles(proyecto: number) {
    this.dialog.open(
      this.arregloDetalles[proyecto],
      {
        height: '80vh', maxHeight: '100vh', // Altura del diálogo, 80% de la altura de la ventana
        width: '80vw', maxWidth: '100vw'  // Ancho del diálogo, 80% del ancho de la ventana
      });
  }
}
