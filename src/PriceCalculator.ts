export class PriceCalculator {
  subscriptionsNumber: number;

  constructor(subscriptionsNumber: number) {
    this.subscriptionsNumber = subscriptionsNumber;
  }

  getTotalPrice(): number {
    if (this.subscriptionsNumber > 2) {
      return 239;
    }
    return 299 * this.subscriptionsNumber;
  }
}
