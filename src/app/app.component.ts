import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [

    { title: 'Inicio', url: '/inicio', icon: 'home' },
    { title: 'Mi Informacion', url: '/informacion-socio', icon: 'people' },
    { title: 'Mi ahorro', url: '/ahorro', icon: 'cash' },
    { title: 'Mis actividades', url: '/actividades', icon: 'restaurant' },
    
  ];
  public labels = [];
  constructor() {}
}
