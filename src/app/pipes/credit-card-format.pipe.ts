import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCardFormat'
})
export class CreditCardFormatPipe implements PipeTransform {
  creditCardAfterFormat:string='';

  transform(creditCard: string): string {
    if(creditCard.length!=16)
    return 'Not Valid Credit Card';
    else{
      let temp1 = creditCard.substring(0,4);
      let temp2 = creditCard.substring(4,8);
      let temp3 = creditCard.substring(8,12);
      let temp4 = creditCard.substring(12,16);
      this.creditCardAfterFormat = `${temp1}-${temp2}-${temp3}-${temp4}`;
      return this.creditCardAfterFormat;

    }

  }

}
