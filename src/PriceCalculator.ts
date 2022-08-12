export class PriceCalculator {
  subscriptionsNumber: number;

  constructor(subscriptionsNumber: number) {
    this.subscriptionsNumber = subscriptionsNumber;
  }

  getTotalPrice(): number {
    return 299 * this.subscriptionsNumber;
  }
}
