import { AhorroService } from './../services/ahorro.service';
import { Router, Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';


import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ahorro',
  templateUrl: './ahorro.page.html',
  styleUrls: ['./ahorro.page.scss'],
})
export class AhorroPage implements OnInit {
  
  ahorros:any=[];
  searchedAhorro:any;

  constructor(
    private router:Router,
    private ahorroService:AhorroService,
    public alertController:AlertController ){}
  

  ngOnInit() {
    const socioReq = {
      "data": [
          {
              "idSocio":1041325808,
              "requestPagination": {
                  "pageNumber": 0,
                  "pageSize": 10
              }
          }
      ]
  }
    console.log("hola");
    this.ahorroService.getAhorro(socioReq).subscribe(res=>{
      console.log("Res",res)
      this.ahorros = res;
      this.searchedAhorro = Object.create(this.ahorros) ;
    });
  }
  
  goToHome(){
    this.router.navigate(['/inicio'])
  }




async presentAlert(){
  console.log('click')
  const alert = await this.alertController.create({
    header:"Borrar registro",
    message:"Desea borrar el registro",
    buttons:[
      {
        text: 'No',
        handler: () => {
          console.log("No cancel")
        }
      },
      {
        text: 'Si',
        handler: ()=> {
          console.log("Eliminada")
       }
      }
    ]
  });

  await alert.present();
  let result=await alert.onDidDismiss();
  console.log(result);
}

searchedAh(event:any){
  const text = event.target.value;
  
  if(text && text.trim() != ''){
    this.searchedAhorro = this.ahorros.filter((ahorro:any)=>{
      return (ahorro.mes.toLowerCase().indexOf(text.toLowerCase())> -1);
    });
  } else {
    this.searchedAhorro = Object.create(this.ahorros);
  }

}

/*   searhAhorro(event) {
    const text = event.target.value;
    this.searchedahorros = this.meses;
    if (text && text.trim(!= '')) {
      this.searhAhorro = this.searhAhorro.filter(mes: any)=> {
        return (mes.name.tolowercase().indexOf(text.tolowercase()) > -1);
      }

    }
  } */

  getTipo(idConcepto:number){
  

  }

}

