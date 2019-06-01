import { Component, OnInit } from '@angular/core';
import { GetjsonService} from '../../services/getjson.service';

@Component({
  selector: 'app-table-perfiles',
  templateUrl: './table-perfiles.component.html',
  styleUrls: ['./table-perfiles.component.css']
})
export class TablePerfilesComponent implements OnInit {

  constructor(private jsonService: GetjsonService) { }
  public perfiles;

  ngOnInit() {
   // this.jsonService.getConfisubscribe(this.perfiles);
   this.jsonService.getConfig().subscribe(resp =>{
    const response= resp;
     this.perfiles=response;
      console.log(response);
    },
      error =>{
        console.log(JSON.stringify(error));
      }

    );
  }

}
