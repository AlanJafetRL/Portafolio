import { AfterViewInit, Component, computed, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { MatSidenavModule } from '@angular/material/sidenav';
import { CustomSidenavComponent } from './components/custom-sidenav/custom-sidenav.component';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { MatCardModule } from '@angular/material/card'
import { MatTooltipModule } from '@angular/material/tooltip';

export type MenuItem = {
  label: string;
  section: string;
}

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
    MatTooltipModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title = 'Portafolio';

  seccionActiva = '';

  menuItems = signal<MenuItem[]>([
    {
      label: 'INICIO',
      section: 'seccion-1',
    },
    {
      label: 'SOBRE MÍ',
      section: 'seccion-2',
    },
    /*     {
          label: 'TECNOLOGÍAS',
          section: 'seccion-3',
        }, */
    {
      label: 'PROYECTOS',
      section: 'seccion-3',
    },
    {
      label: 'CONTACTO',
      section: 'seccion-4',
    },

  ]);

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

  ngAfterViewInit(): void {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      setTimeout(() => {
        const secciones = document.querySelectorAll('section');
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              this.seccionActiva = entry.target.id;
              console.log('Seccion: ', this.seccionActiva);
            }
          });
        }, { threshold: 0.75 });

        secciones.forEach(seccion => observer.observe(seccion));
      });
    }
  }

}