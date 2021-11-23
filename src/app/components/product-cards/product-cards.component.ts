import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { IProduct } from 'src/app/ViewModels/iproduct';

@Component({
  selector: 'app-product-cards',
  templateUrl: './product-cards.component.html',
  styleUrls: ['./product-cards.component.scss']
})

export class ProductCardsComponent implements OnInit {
  productList:IProduct[];

  purchasedDone:string="Thanks for purchasing from our Store";
  itemPurchased:boolean=false;
  purchaseDate:number= Date.now();
  nationalId:string;
  creditCard:string;


  constructor(private prdService:ProductServiceService) {
     this.nationalId= "29804300100831";
     this.creditCard = "0000000000000000";
     this.productList = this.prdService.getAllProducts();
  }
  purchase(){
    this.itemPurchased = true;
  }

  ngOnInit(): void {

  }

}
