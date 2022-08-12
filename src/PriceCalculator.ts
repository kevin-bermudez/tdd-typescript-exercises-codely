export class PriceCalculator {
  subscriptionsNumber: number;
  priceRanges = [
    { low: 1, high: 2, price: 299 },
    { low: 3, high: 10, price: 239 },
    { low: 11, high: 25, price: 219 },
  ];

  constructor(subscriptionsNumber: number) {
    this.subscriptionsNumber = subscriptionsNumber;
  }

  getTotalPrice(): number {
    const rangePrice = this.priceRanges.find(
      (range) =>
        this.subscriptionsNumber >= range.low &&
        this.subscriptionsNumber <= range.high
    );

    return rangePrice?.price * this.subscriptionsNumber;
  }
}
