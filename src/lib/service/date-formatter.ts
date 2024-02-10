export default class Service {
  constructor(public date: Date) {}

  mediumMonth(): string {
    return this.date.toLocaleDateString("en-GB", {
      timeZone: "Europe/Warsaw",
      month: "2-digit",
      year: "numeric",
    });
  }
}
