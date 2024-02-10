export default class Service {
  constructor(public date: Date) {}

  mediumLocal(): string {
    return this.date.toLocaleDateString("en-GB", {
      timeZone: "Europe/Warsaw",
      hour: "2-digit",
      minute: "2-digit",
    });
  }
}
