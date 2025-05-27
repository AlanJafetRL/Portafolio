import { AfterViewInit, Component, computed, inject, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { MatCardModule } from '@angular/material/card'
import { MatTooltipModule } from '@angular/material/tooltip';
import { ProyectosComponent } from './components/proyectos/proyectos.component';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDividerModule } from '@angular/material/divider';

// Definición de tipos para los elementos del menú
export type MenuItem = {
  label: string;
  section: string;
}

// Definición de tipos para los elementos de tecnologías
export type TecnologiasItem = {
  label: string;
  linkWiki: string;
}

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatCardModule,
    MatTooltipModule,
    ProyectosComponent,
    MatDividerModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements AfterViewInit {
  title = 'Portafolio';

  seccionActiva = ''; // Sección activa del menú
  menuAbierto = false;  // Estado del menú (abierto/cerrado)

  // Lista de elementos del menú
  // Utilizando signal para reactividad
  menuItems = signal<MenuItem[]>([
    {
      label: 'INICIO',
      section: 'seccion-1',
    },
    {
      label: 'SOBRE MÍ',
      section: 'seccion-2',
    },
    {
      label: 'PROYECTOS',
      section: 'seccion-3',
    },
    {
      label: 'CONTACTO',
      section: 'seccion-4',
    },

  ]);

  // Lista de tecnologías
  // Utilizando signal para reactividad
  tecnologiasItems = signal<TecnologiasItem[]>([
    {
      label: 'JavaScript',
      linkWiki: 'https://es.wikipedia.org/wiki/JavaScript'
    },
    {
      label: 'TypeScript',
      linkWiki: 'https://es.wikipedia.org/wiki/TypeScript'
    },
    {
      label: 'HTML',
      linkWiki: 'https://es.wikipedia.org/wiki/HTML'
    },
    {
      label: 'CSS',
      linkWiki: 'https://es.wikipedia.org/wiki/CSS'
    },
    {
      label: 'Angular',
      linkWiki: 'https://es.wikipedia.org/wiki/Angular_(framework)'
    },
    {
      label: 'Java',
      linkWiki: 'https://es.wikipedia.org/wiki/Java_(lenguaje_de_programaci%C3%B3n)'
    },
    {
      label: 'C#',
      linkWiki: 'https://es.wikipedia.org/wiki/C_Sharp'
    },
    {
      label: '.NET',
      linkWiki: 'https://es.wikipedia.org/wiki/.NET_Core'
    },
    {
      label: 'ASP.NET',
      linkWiki: 'https://es.wikipedia.org/wiki/ASP.NET_Core'
    },
    {
      label: 'SQL',
      linkWiki: 'https://es.wikipedia.org/wiki/SQL'
    },
    {
      label: 'NoSQL',
      linkWiki: 'https://es.wikipedia.org/wiki/NoSQL'
    },
    {
      label: 'GIT',
      linkWiki: 'https://es.wikipedia.org/wiki/Git'
    },
  ]);

  private _snackBar = inject(MatSnackBar); // Servicio para mostrar mensajes emergentes

  ngAfterViewInit(): void {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') { // Verifica que el entorno sea compatible con el DOM
      setTimeout(() => {  // Espera a que el DOM esté completamente cargado
        const secciones = document.querySelectorAll('section'); // Selecciona todas las secciones del documento
        const observer = new IntersectionObserver((entries) => {  // Observador de intersecciones para detectar la visibilidad de las secciones
          entries.forEach(entry => {  // Itera sobre las entradas del observador
            if (entry.isIntersecting) { // Si la sección está visible en el viewport
              this.seccionActiva = entry.target.id; // Actualiza la sección activa
              //console.log('Seccion: ', this.seccionActiva);
            }
          });
        }, { threshold: 0.3 }); // Configuración del umbral de visibilidad

        secciones.forEach(seccion => observer.observe(seccion));  // Observa cada sección para detectar cambios en su visibilidad
      });
    }
  }

  /**
   * Función para copiar el correo al portapapeles
   */
  copiarCorreoAlPortapapeles() {
    navigator.clipboard.writeText("alanjafet.rl@gmail.com") // Utiliza la API del portapapeles para copiar el correo
      .then(() => {
        //console.log('Contenido copiado al portapapeles');
        this.abrirSnackBar("¡Correo copiado al portapapeles!", '✅'); // Mostrar mensaje emergente de éxito
      }, () => {
        //console.error('Error al copiar');
        this.abrirSnackBar("¡Error al copiar correo al portapapeles! Intente de nuevo", '❌');  // Mostrar mensaje emergente de error
      });
  }

  /**
   * Función para abrir un SnackBar con un mensaje y una acción
   * @param mensaje Mensaje a mostrar en el SnackBar
   * @param accion Acción del SnackBar (ej. "Cerrar")
   */
  abrirSnackBar(mensaje: string, accion: string) {
    this._snackBar.open(mensaje, accion, { duration: 2800 })  // Abre el SnackBar con el mensaje y la acción especificada
  }

  /**
   * Función para alternar el estado del menú (abierto/cerrado)
   */
  toggleMenu() {
    this.menuAbierto = !this.menuAbierto; // Alterna el estado del menú
  }

}