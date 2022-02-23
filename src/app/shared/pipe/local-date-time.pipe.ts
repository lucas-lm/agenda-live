import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'localDateTime'
})
export class LocalDateTimePipe implements PipeTransform {

  transform(date: string): string {
    const dateOut = moment(date, "YYYY-MM-DDTHH:mm:ss")
    return dateOut.format("DD-MM-YYYY HH:mm");
  }

}
