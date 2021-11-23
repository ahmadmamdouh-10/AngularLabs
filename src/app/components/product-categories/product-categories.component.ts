import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/ViewModels/icategory';

@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.scss']
})
export class ProductCategoriesComponent implements OnInit {
  categories:ICategory[];
  selectedCatId:number=0;
  receivedOrderTotalPrice:number=0;

  constructor() {
    this.categories =
    [
      {"id":1 , "name":"laptops"},
      {"id":2 , "name":"phones"},
      {"id":3 , "name":"accessories"},
    ];
   }

  ngOnInit(): void {
  }

  onOrderTotalPriceChanged(orderTotalPrice:number){
    this.receivedOrderTotalPrice = orderTotalPrice;
  }

}
