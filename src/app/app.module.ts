import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NabvarComponent } from './components/nabvar/nabvar.component';
//import { FormularioComponent } from './components/formulario/formulario.component';
//import { TablePerfilesComponent } from './components/table-perfiles/table-perfiles.component';
import { GetjsonService} from './services/getjson.service';


@NgModule({
  declarations: [
    AppComponent,
    NabvarComponent,
    routingComponents
    //FormularioComponent,
    //TablePerfilesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GetjsonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
