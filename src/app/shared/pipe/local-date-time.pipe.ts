import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'localDateTime'
})
export class LocalDateTimePipe implements PipeTransform {

  transform(date: string, format="LLL", locale='pt-br'): string {
    moment.locale(locale)
    const dateOut = moment(date, "YYYY-MM-DDTHH:mm:ss")
    if (format === 'relative') return dateOut.fromNow()
    if (format === 'calendar') return dateOut.calendar()
    return dateOut.format(format);
  }

}
