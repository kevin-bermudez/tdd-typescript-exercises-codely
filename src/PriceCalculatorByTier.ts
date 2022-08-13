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
    let totalPrice = 0,
      tmpSubscriptions = this.subscriptions;

    if (this.subscriptions > 50) {
      const subscriptionsInRange = tmpSubscriptions - 50;
      totalPrice += subscriptionsInRange * this.tierPrices.fifth;
      tmpSubscriptions -= subscriptionsInRange;
    }

    if (tmpSubscriptions >= 26 && tmpSubscriptions <= 50) {
      const subscriptionsInRange = tmpSubscriptions - 25;
      totalPrice += subscriptionsInRange * this.tierPrices.fourth;
      tmpSubscriptions -= subscriptionsInRange;
    }

    if (tmpSubscriptions >= 11 && tmpSubscriptions <= 25) {
      const subscriptionsInRange = tmpSubscriptions - 10;
      totalPrice += subscriptionsInRange * this.tierPrices.thirth;
      tmpSubscriptions -= subscriptionsInRange;
    }

    if (tmpSubscriptions >= 3 && tmpSubscriptions <= 10) {
      const subscriptionsInRange = tmpSubscriptions - 2;
      totalPrice += subscriptionsInRange * this.tierPrices.second;
      tmpSubscriptions -= subscriptionsInRange;
    }

    totalPrice += this.tierPrices.first * tmpSubscriptions;
    return totalPrice;
  }
}
