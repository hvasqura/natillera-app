import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-ingreso-actividades',
  templateUrl: './ingreso-actividades.page.html',
  styleUrls: ['./ingreso-actividades.page.scss'],
})
export class IngresoActividadesPage implements OnInit {
  public ingresoForm: FormGroup;

  constructor() {
    this.ingresoForm = new FormGroup({
      codigo: new FormControl('', [Validators.required]),
      tipo: new FormControl('', [Validators.required]),
      fecha: new FormControl('', [Validators.required])
    });
   }

  ngOnInit() {
    this.ingresoForm.setValue(
      {'codigo': '1123',
      'tipo': 'cc',
      'fecha': '10/02/2023',
      })
  }
  onSubmit(formulario: FormGroup) {
    if(formulario.valid){
      console.log(formulario.value);
    }
  }
}
