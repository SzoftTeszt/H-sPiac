import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductslistComponent } from './productslist/productslist.component';
import { HibaComponent } from './hiba/hiba.component';

const routes: Routes = [
  
  {path:"", redirectTo:"productslist",pathMatch:'full'},
  {path:"productslist", component:ProductslistComponent},
  {path:"**", component:HibaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
