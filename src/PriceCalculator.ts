export class PriceCalculator {
  subscriptionsNumber: number;
  priceRanges: { low: number; high: number; price: number }[] = [
    { low: 1, high: 2, price: 299 },
    { low: 3, high: 10, price: 239 },
    { low: 11, high: 25, price: 219 },
    { low: 26, high: 50, price: 199 },
    { low: 51, high: 0, price: 149 },
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

    return rangePrice
      ? rangePrice.price * this.subscriptionsNumber
      : this.priceRanges[this.priceRanges.length - 1].price *
          this.subscriptionsNumber;
  }
}
