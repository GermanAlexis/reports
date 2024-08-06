export class DateFormatter {

  static dateformatter = new Intl.DateTimeFormat('us-Us', {
    day: "2-digit",
    month: 'long',
    year: 'numeric'
  })


  static getDDMMYYY(date: Date | number): string {
    return this.dateformatter.format(date)
  }

}
