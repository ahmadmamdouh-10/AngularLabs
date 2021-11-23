import { Component, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/ViewModels/iproduct';
import { ProductServiceService } from 'src/app/services/product-service.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  sentprdID: number=0;
  prd:IProduct={} as IProduct;

  constructor(
    private activatedRouter: ActivatedRoute
  , private prdService: ProductServiceService
  , private router: Router
  , private location:Location
  ) { }

  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe(params=>{
      this.sentprdID=Number(params.get("pID"));
      this.prd = this.prdService.getProductByID(this.sentprdID);
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
