import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { KeresesService } from '../kereses.service';

@Component({
  selector: 'app-productslist',
  templateUrl: './productslist.component.html',
  styleUrl: './productslist.component.css'
})
export class ProductslistComponent {
  products:any=[]
  szo=""

  constructor(private base:BaseService, private kereses:KeresesService){
    this.base.getProducts().subscribe(
      (res:any)=>this.products=res
    )

    this.kereses.szoSubject.subscribe(
      (res:any)=>this.szo=res
    )
  }

}
