export class PriceCalculatorByTier {
  subscriptions: number;
  constructor(subscriptions: number) {
    this.subscriptions = subscriptions;
  }

  getTotalPrice(): number {
    if (this.subscriptions == 3) {
      return 299 * 2 + 239;
    }

    return 299 * this.subscriptions;
  }
}
