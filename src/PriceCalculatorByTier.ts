export class PriceCalculatorByTier {
  subscriptions: number;
  tierPrices = {
    first: 299,
    second: 239,
    thirth: 219,
    fourth: 199,
    fifth: 149,
  };

  constructor(subscriptions: number) {
    this.subscriptions = subscriptions;
  }

  getTotalPrice(): number {
    const firstTier = this.tierPrices.first * 2;
    const secondTier = this.tierPrices.second * 8;
    const thirthTier = this.tierPrices.thirth * 15;
    const fourthTier = this.tierPrices.fourth * 25;

    if (this.subscriptions > 50) {
      return (
        firstTier +
        secondTier +
        thirthTier +
        fourthTier +
        this.tierPrices.fifth * (this.subscriptions - 50)
      );
    }

    if (this.subscriptions >= 26 && this.subscriptions <= 50) {
      return (
        firstTier +
        secondTier +
        thirthTier +
        this.tierPrices.fourth * (this.subscriptions - 25)
      );
    }

    if (this.subscriptions >= 11 && this.subscriptions <= 25) {
      return (
        firstTier +
        secondTier +
        this.tierPrices.thirth * (this.subscriptions - 10)
      );
    }

    if (this.subscriptions >= 3 && this.subscriptions <= 10) {
      return firstTier + this.tierPrices.second * (this.subscriptions - 2);
    }

    if (this.subscriptions >= 1 && this.subscriptions <= 2) {
      return 299 * this.subscriptions;
    }
  }
}
