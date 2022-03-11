import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormatPipe'
})
export class DateFormatPipePipe implements PipeTransform {

  transform(date: Date) {
    var datePipe = new DatePipe("en-US");
    var value = datePipe.transform(date, 'dd/MM/yyyy');
    return value;
  }

}
