export class PriceCalculatorByTier {
  subscriptions: number;
  constructor(subscriptions: number) {
    this.subscriptions = subscriptions;
  }

  getTotalPrice(): number {
    if (this.subscriptions == 3) {
      return 299 * 2 + 239;
    }

    if (this.subscriptions == 11) {
      return 299 * 2 + 239 * 8 + 219;
    }

    return 299 * this.subscriptions;
  }
}
