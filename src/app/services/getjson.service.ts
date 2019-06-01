import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetjsonService {

  configURL='https://my-json-server.typicode.com/mavericc/demo/perfiles';

  constructor(private http: HttpClient) { }

  getConfig(){
    return this.http.get(this.configURL);
  }
  /*-----Obtienes json-----*/
  PostConfig(perfiles){
    const json= JSON.stringify(perfiles); /*--convierte json cadena--*/
    const headers=new HttpHeaders().set('Content-Type', 'application/json')
    return  this.http.post(this.configURL, json, {headers}).pipe(
      catchError (this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.error('Ocurrio un error',error.error.message );
    }else{
      // el backend devolvió un código de respuesta sin éxito.
      console.error('Backend retorna codigo: ${error.status}, ' + '${error.status}');
    }
    return throwError('Algo anda mal; por favor intente otra vez.');
  }
  /*public response;
  public getConfisubscribe = function(response){
    this.jsonService.getConfig().subscribe(resp =>{
      response= resp;
      console.log(response);
    },
      error =>{
        console.log(JSON.stringify(error));
      }

    );
  }*/
}
