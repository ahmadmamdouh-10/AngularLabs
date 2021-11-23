import { Component, Input, OnChanges, OnInit, Output, SimpleChanges, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { IProductfrmAPI } from 'src/app/Models/iproductfrm-api';
import { ProductsFrmAPIService } from 'src/app/services/products-frm-api.service';

@Component({
  selector: 'app-prd-frm-api',
  templateUrl: './prd-frm-api.component.html',
  styleUrls: ['./prd-frm-api.component.scss']
})
export class PrdFrmAPIComponent implements OnInit, OnChanges {
  prdList: IProductfrmAPI[]=[];
  prdListForSelCat:IProductfrmAPI[]=[];
  @Input() sentSelCatID: number=0;
  orderTotalPrice:number=0;
  @Output() orderTotalPriceChanged: EventEmitter<number>;

  constructor(
    private prdServiceFrmAPI:ProductsFrmAPIService,
    private router:Router
  ) {
    this.orderTotalPriceChanged=new EventEmitter<number>();
  }
  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
    this.prdServiceFrmAPI.getAll().subscribe({
      next: (products)=>{
        this.prdList = products;
      },
      error: (error)=>{
        console.log(error);
      }
    });
  }

  calcTotalPrice(itemPrice:number, itemCount:any){
    this.orderTotalPrice+=(itemPrice * +itemCount);
    this.orderTotalPriceChanged.emit(this.orderTotalPrice);
  }




}
