import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablePerfilesComponent } from './components/table-perfiles/table-perfiles.component';
import { FormularioComponent } from './components/formulario/formulario.component';


const routes: Routes = [
  {path: 'verPerfiles', component: TablePerfilesComponent},
  {path: 'Inicio', component: FormularioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents= [TablePerfilesComponent,FormularioComponent]
