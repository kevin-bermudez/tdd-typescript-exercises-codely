import { PriceCalculator } from "../src/PriceCalculator";

const subscriptionsUnitPrices = {
  firstRange: 299,
  secondRange: 239,
  thirthRange: 219,
  lastRange: 149,
};
describe("Codelyber", () => {
  it("calculate right price first range one subscription", () => {
    const priceCalculator = new PriceCalculator(1);
    expect(priceCalculator.getTotalPrice()).toBe(
      subscriptionsUnitPrices.firstRange
    );
  });

  it("calculate right price first range two subscriptions", () => {
    const priceCalculator = new PriceCalculator(2);
    expect(priceCalculator.getTotalPrice()).toBe(
      subscriptionsUnitPrices.firstRange * 2
    );
  });

  it("calculate right price second range tree subscriptions", () => {
    const priceCalculator = new PriceCalculator(3);
    expect(priceCalculator.getTotalPrice()).toBe(
      subscriptionsUnitPrices.secondRange * 3
    );
  });

  it("calculate right price thirth range eleven subscriptions", () => {
    const priceCalculator = new PriceCalculator(11);
    expect(priceCalculator.getTotalPrice()).toBe(
      subscriptionsUnitPrices.thirthRange * 11
    );
  });

  it("calculate right price last range 55 or more subscriptions", () => {
    const priceCalculator = new PriceCalculator(55);
    expect(priceCalculator.getTotalPrice()).toBe(
      subscriptionsUnitPrices.lastRange * 55
    );
  });
});
