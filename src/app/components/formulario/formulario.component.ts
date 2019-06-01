import { Component, OnInit } from '@angular/core';
import { GetjsonService} from '../../services/getjson.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor(private jsonService:GetjsonService) { }

  public perfiles= {
    id:null,
    nombre:null,
    usuario:null,
    telefono:null,
    direccion:null
  };

  public getPerfles=function(){
    this.jsonService.getConfig().subscribe(resp =>{
      const response= resp;
      console.log(response);
    },
      error =>{
        console.log(JSON.stringify(error));
      }

    );
  }
  ngOnInit() {
    this.jsonService.getConfig().subscribe(resp =>{
      const response= resp;
      console.log(response);
    },
      error =>{
        console.log(JSON.stringify(error));
      }

    );
  }

}
