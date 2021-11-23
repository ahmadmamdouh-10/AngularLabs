import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';

@Injectable({
  //When you provide  the service at the root level
  // Angular creates a single shared instance of service
  //and inject it into any class that asks for it.
//   The service will be available application wide
//  as a singleton with no need to add it to a module's providers array
  providedIn: 'root'
})
export class ProductServiceService {
  productList:IProduct[];

  purchaseDate:number= Date.now();

  constructor() {
    this.productList = [
      { Id:2,name:"Vision 1Pro",quantity:10,price:5000,img: "assets/oneplus.jpg",categoryId:2,categoryName:"phones",purchaseDate: this.purchaseDate },
      { Id:3,name:"OnePlus",quantity:1,price:7000,img: "assets/oneplus.jpg",categoryId:3,categoryName:"phones",purchaseDate: this.purchaseDate},
      { Id:5,name:"Airpods",quantity:14,price:60000,img: "assets/airpods.jpeg",categoryId:5,categoryName:"accessories",purchaseDate: this.purchaseDate},
      { Id:6,name:"Smart Watch",quantity:1,price:99922,img: "assets/smartwatch.jpeg",categoryId:6,categoryName:"accessories",purchaseDate: this.purchaseDate},
      { Id:1,name:"Lenovo",quantity:1,price:10000,img:"assets/mac.jpeg" ,categoryId:1,categoryName:"laptops",purchaseDate: this.purchaseDate},
      { Id:4,name:"MacBookPro",quantity:0,price:19000,img: "assets/mac.jpeg",categoryId:4,categoryName:"laptops",purchaseDate: this.purchaseDate}
    ];
   }


   getAllProducts(): IProduct[]
   {
     return this.productList;
   }

  getProductsByCatID(catID:number):IProduct[]{
    if(catID==0)
    return this.productList;
    else
    return this.productList.filter(products=>products.categoryId==catID);
  }

  getProductByID(prodID:number):IProduct{
    let productNeeded=this.productList.find(product=>product.Id==prodID);
    return (productNeeded)?productNeeded:{}as IProduct;
  }
}
