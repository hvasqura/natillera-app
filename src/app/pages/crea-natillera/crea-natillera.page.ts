import { CicloService } from './../../services/ciclo.service';
import { Ciclo } from './../../model/ciclo/ciclo';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crea-natillera',
  templateUrl: './crea-natillera.page.html',
  styleUrls: ['./crea-natillera.page.scss'],
})
export class CreaNatilleraPage implements OnInit {
  public crearNatillera: FormGroup;

  constructor(private cicloService:CicloService) { 
    this.crearNatillera = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {
  }

  onSubmit(formulario: FormGroup) {
    if(formulario.valid){
      const nuevoCiclo: Ciclo = {
        nombre: formulario.value.nombre
      }
      this.cicloService.crear(nuevoCiclo).subscribe(res =>{
        console.log(res)
      })
    }
  }

}
