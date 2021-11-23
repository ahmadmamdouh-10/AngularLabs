import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { DiscoundOffers } from 'src/app/Models/discound-offers';
import { IProductfrmAPI } from 'src/app/Models/iproductfrm-api';
import { Store } from 'src/app/Models/store';
import { ProductsFrmAPIService } from 'src/app/services/products-frm-api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit,OnChanges {

   clientName:string="Ahmed";
   discount:string;
   storeOwn:Store;
   productList:IProductfrmAPI[]=[] as IProductfrmAPI[];
   hasNoDiscount:boolean;
   itemPurchased:boolean=false;
   purchasedDone:string="Thanks for purchasing from our Store";
  purchaseDate:number= Date.now();
  SelectedProductList:IProductfrmAPI[]=[] as IProductfrmAPI[];
  @Input() sentSelectedCategoryID:number=0;
  orderTotalPrice:number=0;
  @Output() oderTotalPriceChanged: EventEmitter<number>;

  constructor(private prdService:ProductsFrmAPIService)
     {
       this.oderTotalPriceChanged= new EventEmitter<number>();

       this.discount = DiscoundOffers[1];
       this.storeOwn = new Store("Shopify",["Asyut","Sohag"],"assets/ITILogo.png");
      //  this.productList = [
      //   { Id:1,name:"Vision 1Pro",quantity:10,price:5000,img: "assets/oneplus.jpg",categoryId:2,categoryName:"phones",purchaseDate: this.purchaseDate },
      //   { Id:2,name:"OnePlus",quantity:1,price:7000,img: "assets/oneplus.jpg",categoryId:2,categoryName:"phones",purchaseDate: this.purchaseDate},
      //   { Id:3,name:"Airpods",quantity:14,price:60000,img: "assets/airpods.jpeg",categoryId:3,categoryName:"accessories",purchaseDate: this.purchaseDate},
      //   { Id:4,name:"Smart Watch",quantity:1,price:99922,img: "assets/smartwatch.jpeg",categoryId:3,categoryName:"accessories",purchaseDate: this.purchaseDate},
      //   { Id:5,name:"Lenovo",quantity:1,price:10000,img:"assets/mac.jpeg" ,categoryId:1,categoryName:"laptops",purchaseDate: this.purchaseDate},
      //   { Id:6,name:"MacBookPro",quantity:0,price:19000,img: "assets/mac.jpeg",categoryId:1,categoryName:"laptops",purchaseDate: this.purchaseDate}
      //  ];

        this.hasNoDiscount = this.discount == DiscoundOffers[1] ?true:false;
     }



  ngOnChanges(changes: SimpleChanges): void {
    if(this.sentSelectedCategoryID == 0)
    this.SelectedProductList = Array.from(this.productList);
    else
    this.SelectedProductList = this.productList.filter((prd=>prd.CategoryID==this.sentSelectedCategoryID));
  }



  ngOnInit(): void {
    this.prdService.getAll().subscribe({
      next: (prod)=>{
        this.productList = prod;
        this.SelectedProductList=prod;
      },
      error: (error)=>{
        console.log(error);
      }
    });

  }

  purchase(){
    this.itemPurchased = true;
  }

  clacTotalPrice(itemPrice:number, itemCount:string){
    this.orderTotalPrice +=(itemPrice * Number(itemCount));
    this.oderTotalPriceChanged.emit(this.orderTotalPrice);
  }





}
