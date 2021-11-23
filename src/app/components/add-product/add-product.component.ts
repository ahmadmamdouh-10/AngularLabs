import { Component, OnInit } from '@angular/core';
import { IProductfrmAPI } from 'src/app/Models/iproductfrm-api';
import { ProductsFrmAPIService } from 'src/app/services/products-frm-api.service';
import { FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/Models/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit{
  newPrd: IProductfrmAPI={} as IProductfrmAPI;
  createPrdForm:FormGroup={} as FormGroup;


  constructor(
     private formBuilder: FormBuilder
    ,private router: Router
    ,private prdService: ProductsFrmAPIService
    ) {

   }


  ngOnInit(): void {
    this.createPrdForm = this.formBuilder.group({
      Name: [null,[
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(30)
      ]],
      Price: [null,[
        Validators.required,
        Validators.min(10),
        Validators.max(1000)
      ]],
      Quantity:[null,[
        Validators.required,
        Validators.min(1),
        Validators.max(100)
      ]],
      ImgURL: [null,[
        Validators.minLength(10),
        Validators.maxLength(150),
      ]],
      CatName: [null,[
        Validators.minLength(5),
        Validators.maxLength(50)
      ]],
    });
  }


  formHasError(error: string){
    return !!this.createPrdForm.hasError(error);
  }

  isTouched(field: string){
    return this.createPrdForm.get(field)?.touched;
  }

  hasErrors(field:string){
    return this.createPrdForm.get(field)?.errors;
  }

  hasError(field:string, error:string){
    return !!this.createPrdForm.get(field)?.hasError(error);
  }

  categoryIDFromName(catName:string):number{
    let lowerCatName = catName.toLowerCase();
    if(lowerCatName == 'laptops')
    return 1;
    else if(catName == 'tablets')
    return 2;
    else if(catName == 'mobile')
    return 3;
    else
    return 4;
  }


  addProduct(){
    this.newPrd = new Product(
      this.createPrdForm.get("Name")?.value,
      this.createPrdForm.get("Quantity")?.value,
      this.createPrdForm.get('Price')?.value,
      (Math.random()*10),
      this.createPrdForm.get('ImgURL')?.value,
      this.categoryIDFromName(this.createPrdForm.get('CatName')?.value)
    );

    this.prdService.addProduct(this.newPrd).subscribe({
      next: res=> {
        console.log(res);
        this.router.navigate(['/Dashboard']);
      },
      error: err=>{console.log(err)}
    });
  }

}
