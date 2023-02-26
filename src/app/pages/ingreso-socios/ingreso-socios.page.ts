import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Socio } from 'src/app/model/socio/socio';
import { SocioService } from 'src/app/services/socio.service';

@Component({
  selector: 'app-ingreso-socios',
  templateUrl: './ingreso-socios.page.html',
  styleUrls: ['./ingreso-socios.page.scss'],
})
export class IngresoSociosPage implements OnInit {

  public ingresoSocio: FormGroup;

  constructor(public socioServive: SocioService) { 
    this.ingresoSocio = new FormGroup({
      documento: new FormControl('', [Validators.required]),
      tipo: new FormControl('', [Validators.required]),
      nombre: new FormControl('', []),
      apellido: new FormControl('', []),
      email: new FormControl('', [Validators.required, Validators.email]),
      celular: new FormControl('', []),
      direccion: new FormControl('', []),
      password: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
    /* this.ingresoSocio.setValue(
      {'documento': '',
      'tipo': '',
      'nombre': '',
      'apellido': '',
      'email': '',
      'celular': '','direccion': '','password': ''}) */
  }

  onSubmit(formulario: FormGroup) {
    if (formulario.valid) {
      console.log(formulario.value);
      const socio: Socio = {
        cicloId: 2022,
        cedula: formulario.value.documento,
        tipoDocumento: formulario.value.tipo,
        nombres: formulario.value.nombre,
        apellidos: formulario.value.apellido,
        direccion: formulario.value.direccion,
        celular: formulario.value.celular,
        email: formulario.value.email,
        password: formulario.value.password,
      }
      this.socioServive.crear(socio).subscribe(res => {
        console.log(res);
      })
    }

  }
}
