export class PriceCalculatorByTier {
  subscriptions: number;

  tierRangesList = [
    { low: 51, price: 149 },
    { low: 26, high: 50, price: 199 },
    { low: 11, high: 25, price: 219 },
    { low: 3, high: 10, price: 239 },
    { low: 1, high: 2, price: 299 },
  ];

  constructor(subscriptions: number) {
    this.subscriptions = subscriptions;
  }

  getTotalPrice(): number {
    let totalPrice = 0,
      tmpSubscriptions = this.subscriptions;

    this.tierRangesList.forEach((tier) => {
      if (
        (tier.high &&
          tmpSubscriptions >= tier.low &&
          tmpSubscriptions <= tier.high) ||
        (!tier.high && tmpSubscriptions >= tier.low)
      ) {
        const subscriptionsInRange = tmpSubscriptions - (tier.low - 1);
        totalPrice += subscriptionsInRange * tier.price;
        tmpSubscriptions -= subscriptionsInRange;
      }
    });

    return totalPrice;
  }
}
