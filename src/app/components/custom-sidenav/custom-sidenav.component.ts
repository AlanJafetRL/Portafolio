import { AfterViewInit, Component, Input, signal } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

export type MenuItem = {
  label: string;
  section: string;
}

@Component({
  selector: 'app-custom-sidenav',
  imports: [CommonModule, MatListModule, MatIconModule],
  templateUrl: './custom-sidenav.component.html',
  styleUrl: './custom-sidenav.component.scss'
})
export class CustomSidenavComponent {


  sideNavCollapsed = signal(false);
  @Input() set collapsed(val: boolean) {
    this.sideNavCollapsed.set(val);
  }

  menuItems = signal<MenuItem[]>([
    {
      label: 'INICIO',
      section: 'seccion-1',
    },
    {
      label: 'SOBRE MI',
      section: 'seccion-2',
    },
    {
      label: 'TECNOLOGÍAS',
      section: 'seccion-3',
    },
    {
      label: 'PROYECTOS',
      section: 'seccion-4',
    },
    {
      label: 'CONTACTO',
      section: 'seccion-5',
    },

  ]);

}
