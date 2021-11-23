import { Component, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { ProductsFrmAPIService } from 'src/app/services/products-frm-api.service';
import { Observable } from 'rxjs';
import { IProductfrmAPI } from 'src/app/Models/iproductfrm-api';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  sentprdID: number=0;
  prd: IProductfrmAPI={} as IProductfrmAPI;

  constructor(
    private activatedRouter: ActivatedRoute
  , private prdService: ProductsFrmAPIService
  , private router: Router
  , private location:Location
  ) { }

  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe(params=>{
      this.sentprdID=Number(params.get("pID"));
      this.prdService.getProductByID(this.sentprdID)
      .subscribe((res: IProductfrmAPI)=>{
        this.prd = res;
      });
    })
  }

  prevProduct(){
    this.router.navigate(['/Products', this.sentprdID-1])
    .then(()=>{
      console.log("Navigate occured....");
    })
  }

  nextProduct(){
    this.router.navigate(['/Products', this.sentprdID+1])
  }

  goBack(){
    this.location.back();
  }



}
