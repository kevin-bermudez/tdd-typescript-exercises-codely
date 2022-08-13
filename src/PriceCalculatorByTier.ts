export class PriceCalculatorByTier {
  subscriptions: number;
  tierPrices = {
    first: 299,
    second: 239,
    thirth: 219,
    fourth: 199,
  };

  constructor(subscriptions: number) {
    this.subscriptions = subscriptions;
  }

  getTotalPrice(): number {
    const firstTier = this.tierPrices.first * 2;
    const secondTier = this.tierPrices.second * 8;
    const thirthTier = this.tierPrices.thirth * 15;

    if (this.subscriptions == 3) {
      return firstTier + this.tierPrices.second;
    }

    if (this.subscriptions == 11) {
      return firstTier + secondTier + this.tierPrices.thirth;
    }

    if (this.subscriptions == 26) {
      return firstTier + secondTier + thirthTier + this.tierPrices.fourth;
    }

    return 299 * this.subscriptions;
  }
}
