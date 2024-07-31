export class DateFormatter {

  static dateformatter = new Intl.DateTimeFormat('es-Es', {
    day: "2-digit",
    month: 'long',
    year: 'numeric'
  })


  static getDDMMYYY(date: Date): string {
    return this.dateformatter.format(date)
  }

}
