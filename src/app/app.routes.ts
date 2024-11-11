import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleClienteComponent } from './cliente/detalle-cliente/detalle-cliente.component';

const routes: Routes = [
  { path: '', component: DetalleClienteComponent },
  { path: '**', redirectTo: '' } // Ruta por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
