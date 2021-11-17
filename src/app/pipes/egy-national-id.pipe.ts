import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'egyNationalId'
})
export class EgyNationalIdPipe implements PipeTransform {
  fullDate:string='';
  year:any;
  month:any;
  day:any;



  transform(egNationalId: string): string {
    this.year = (1900 +  Number(egNationalId.substring(1,3))).toString();
    this.month = (egNationalId.substring(3,5)).toString();
    this.day = (egNationalId.substring(5,7)).toString();

    this.fullDate = `${this.day} - ${this.month} - ${this.year}`;
    return this.fullDate;
  }

}
