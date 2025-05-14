import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-productslist',
  templateUrl: './productslist.component.html',
  styleUrl: './productslist.component.css'
})
export class ProductslistComponent {
  products:any=[]

  constructor(private base:BaseService){
    this.base.getProducts().subscribe(
      (res:any)=>this.products=res
    )
  }

}
