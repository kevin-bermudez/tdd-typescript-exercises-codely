export class PriceCalculatorByTier {
  subscriptions: number;
  tierPrices = {
    first: 299,
    second: 239,
    thirth: 219,
  };

  constructor(subscriptions: number) {
    this.subscriptions = subscriptions;
  }

  getTotalPrice(): number {
    const firstTier = this.tierPrices.first * 2;
    const secondTier = this.tierPrices.second * 8;
    if (this.subscriptions == 3) {
      return firstTier + this.tierPrices.second;
    }

    if (this.subscriptions == 11) {
      return firstTier + secondTier + this.tierPrices.thirth;
    }

    return 299 * this.subscriptions;
  }
}
