import { Component, OnInit } from '@angular/core';
import { IProduct } from '../ViewModels/iproduct';

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


  constructor() {
    this.productList = [
      { Id:2,name:"Vision 1Pro",quantity:10,price:5000,img: "assets/oneplus.jpg",categoryId:2,categoryName:"phones",purchaseDate: this.purchaseDate },
      { Id:3,name:"OnePlus",quantity:1,price:7000,img: "assets/oneplus.jpg",categoryId:3,categoryName:"phones",purchaseDate: this.purchaseDate},
      { Id:5,name:"Airpods",quantity:14,price:60000,img: "assets/airpods.jpeg",categoryId:5,categoryName:"accessories",purchaseDate: this.purchaseDate},
      { Id:6,name:"Smart Watch",quantity:1,price:99922,img: "assets/smartwatch.jpeg",categoryId:6,categoryName:"accessories",purchaseDate: this.purchaseDate},
      { Id:1,name:"Lenovo",quantity:1,price:10000,img:"assets/mac.jpeg" ,categoryId:1,categoryName:"laptops",purchaseDate: this.purchaseDate},
      { Id:4,name:"MacBookPro",quantity:0,price:19000,img: "assets/mac.jpeg",categoryId:4,categoryName:"laptops",purchaseDate: this.purchaseDate}

     ];
     this.nationalId= "29804300100831";
     this.creditCard = "0000000000000000"

  }
  purchase(){
    this.itemPurchased = true;
  }

  ngOnInit(): void {
  }

}
