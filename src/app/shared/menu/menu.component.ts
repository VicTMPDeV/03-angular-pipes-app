import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api'; //PrimeNG components

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `
    img.logo {
      height: 3rem;
    }
    `
  ]
})
export class MenuComponent implements OnInit {

  public items: MenuItem[] = [];
  // Another Way
  // public items!: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos',
            icon: 'pi pi-align-left',
            routerLink: '/'
          },
          {
            label: 'Numéricos',
            icon: 'pi pi-dollar',
            routerLink: 'numbers'
          },
          {
            label: 'Fechas',
            icon: 'pi pi-calendar',
            routerLink: 'dates'
          },
          {
            label: 'i18n',
            icon: 'pi pi-globe',
            routerLink: 'not-commons'
          }
        ]
      },
      {
        label: 'Pipes Personalizados',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Ordenación',
            icon: 'pi pi-align-left',
            routerLink: 'sort'
          }
        ]
      }
    ];
  }

}
