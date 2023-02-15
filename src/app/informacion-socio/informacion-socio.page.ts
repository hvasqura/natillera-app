import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-informacion-socio',
  templateUrl: './informacion-socio.page.html',
  styleUrls: ['./informacion-socio.page.scss'],
})
export class InformacionSocioPage implements OnInit {

  public informacionForm: FormGroup;

  constructor() {
    this.informacionForm = new FormGroup({
      documento: new FormControl('', [Validators.required]),
      tipo: new FormControl('', [Validators.required]),
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      celular: new FormControl('', [Validators.required]),
      direccion: new FormControl('', [Validators.required])
    });
   }

  ngOnInit() {
    this.informacionForm.setValue(
      {'documento': '1123',
      'tipo': 'cc',
      'nombre': 'alejandro',
      'apellido': 'marin',
      'email': 'alejandro@gmail.com',
      'celular': '123','direccion': 'clle',})
  }

  onSubmit(formulario: FormGroup) {
    if(formulario.valid){
      console.log(formulario.value);
    }
    
  }

}
