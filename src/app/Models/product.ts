import { StringMap } from "@angular/compiler/src/compiler_facade_interface";
import { IProductfrmAPI } from "./iproductfrm-api";

export class Product implements IProductfrmAPI {

  constructor( _Name:string
    , _Quantity:number
    , _Price:number
    , _id?:number
    , _ImgURL?:string
    , _CategoryID?:number
    )
    {
      this.id= _id;
      this.Name=_Name;
      this.Quantity = _Quantity;
      this.Price = _Price;
      this.ImgURL = _ImgURL;
      this.CategoryID = _CategoryID;
    }

  id?: number | undefined;
  Name: string;
  Quantity: number;
  Price: number;
  ImgURL?: string | undefined;
  CategoryID?: number | undefined;
}
