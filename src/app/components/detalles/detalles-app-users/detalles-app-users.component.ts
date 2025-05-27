import { Component, OnInit } from '@angular/core';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-detalles-app-users',
  imports: [
    MatDialogModule,
    MatButtonModule
  ],
  templateUrl: './detalles-app-users.component.html',
  styleUrl: './detalles-app-users.component.scss'
})
export class DetallesAppUsersComponent implements OnInit {

  slides: any[] = new Array().fill({ id: -1, src: '', title: '', subtitle: '' });

  ngOnInit(): void {
    this.slides = [
      {
        id: 1,
        src: 'assets/img/proyectos/app-users/01.jpeg',
        title: 'Pantalla de inicio',
        subtitle: 'Vista principal de la aplicación con acceso a las funcionalidades principales.'
      },
      {
        id: 2,
        src: 'assets/img/proyectos/app-users/02.jpeg',
        title: 'Registro de usuario',
        subtitle: 'Formulario para crear una nueva cuenta de usuario.'
      },
      {
        id: 3,
        src: 'assets/img/proyectos/app-users/03.jpeg',
        title: 'Perfil de usuario',
        subtitle: 'Vista del perfil del usuario con opciones de edición.'
      }
    ];
  }
}
