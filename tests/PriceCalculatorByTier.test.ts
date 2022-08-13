import { PriceCalculatorByTier } from "../src/PriceCalculatorByTier";

const subscriptionsUnitPrices = {
  firstRange: 299,
  secondRange: 239,
  thirthRange: 219,
  fourthRange: 199,
  fithRange: 149,
};
// 1-2	299 €
// 3-10	239 €
// 11-25	219 €
// 26-50	199 €
// 51+	149 €
describe("Price calculator by tier", () => {
  it("calculate right price first range one subscription", () => {
    const priceCalculator = new PriceCalculatorByTier(1);
    expect(priceCalculator.getTotalPrice()).toBe(
      subscriptionsUnitPrices.firstRange
    );
  });

  it("calculate right price first range two subscriptions", () => {
    const priceCalculator = new PriceCalculatorByTier(2);
    expect(priceCalculator.getTotalPrice()).toBe(
      subscriptionsUnitPrices.firstRange * 2
    );
  });

  it("calculate right price second and first range tree subscriptions", () => {
    const priceCalculator = new PriceCalculatorByTier(3);
    expect(priceCalculator.getTotalPrice()).toBe(
      subscriptionsUnitPrices.firstRange * 2 +
        subscriptionsUnitPrices.secondRange
    );
  });

  it("calculate right price thirth and second and first range eleven subscriptions", () => {
    const priceCalculator = new PriceCalculatorByTier(11);
    expect(priceCalculator.getTotalPrice()).toBe(
      subscriptionsUnitPrices.firstRange * 2 +
        subscriptionsUnitPrices.secondRange * 8 +
        subscriptionsUnitPrices.thirthRange
    );
  });

  it("calculate right price fourth and thirth and second and first range eleven subscriptions", () => {
    const priceCalculator = new PriceCalculatorByTier(26);
    expect(priceCalculator.getTotalPrice()).toBe(
      subscriptionsUnitPrices.firstRange * 2 +
        subscriptionsUnitPrices.secondRange * 8 +
        subscriptionsUnitPrices.thirthRange * 15 +
        subscriptionsUnitPrices.fourthRange
    );
  });

  it("calculate right price second and first range four subscriptions", () => {
    const priceCalculator = new PriceCalculatorByTier(4);
    expect(priceCalculator.getTotalPrice()).toBe(
      subscriptionsUnitPrices.firstRange * 2 +
        subscriptionsUnitPrices.secondRange * 2
    );
  });

  it("calculate right price thirth and second and first range four subscriptions", () => {
    const priceCalculator = new PriceCalculatorByTier(12);
    expect(priceCalculator.getTotalPrice()).toBe(
      subscriptionsUnitPrices.firstRange * 2 +
        subscriptionsUnitPrices.secondRange * 8 +
        subscriptionsUnitPrices.thirthRange * 2
    );
  });

  it("calculate right price fifth and fourth and thirth and second and first range 51 subscriptions", () => {
    const priceCalculator = new PriceCalculatorByTier(51);
    expect(priceCalculator.getTotalPrice()).toBe(
      subscriptionsUnitPrices.firstRange * 2 +
        subscriptionsUnitPrices.secondRange * 8 +
        subscriptionsUnitPrices.thirthRange * 15 +
        subscriptionsUnitPrices.fourthRange * 25 +
        subscriptionsUnitPrices.fithRange
    );
  });
});
