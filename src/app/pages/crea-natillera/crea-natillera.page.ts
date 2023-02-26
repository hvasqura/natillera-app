import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crea-natillera',
  templateUrl: './crea-natillera.page.html',
  styleUrls: ['./crea-natillera.page.scss'],
})
export class CreaNatilleraPage implements OnInit {
  public crearNatillera: FormGroup;

  constructor() { 
    this.crearNatillera = new FormGroup({
      codigo: new FormControl('', ),
      nombre: new FormControl('', [Validators.required]),
      
    });
  }

  ngOnInit() {
    this.crearNatillera.setValue(
      {'codigo': '',
      'nombre': '',
      })
  }

  onSubmit(formulario: FormGroup) {
    if(formulario.valid){
      console.log(formulario.value);
    }
  }

}
