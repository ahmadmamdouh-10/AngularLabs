import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.scss']
})
export class ProductCategoriesComponent implements OnInit {
  categories:ICategory[]=[] as ICategory[];
  selectedCatId:number=0;
  receivedOrderTotalPrice:number=0;

  constructor(private catService:CategoryService) {
    // this.categories =
    // [
    //   {"id":1 , "name":"laptops"},
    //   {"id":2 , "name":"phones"},
    //   {"id":3 , "name":"accessories"},
    // ];
   }

  ngOnInit(): void {
    this.catService.getAll().subscribe({
      next: (category)=>{
        this.categories = category;
      },
      error: (error)=>{
        console.log(error);
      }
    });

  }

  onOrderTotalPriceChanged(orderTotalPrice:number){
    this.receivedOrderTotalPrice = orderTotalPrice;
  }

}
