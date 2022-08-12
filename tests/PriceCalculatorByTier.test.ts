import { PriceCalculatorByTier } from "../src/PriceCalculatorByTier";

const subscriptionsUnitPrices = {
  firstRange: 299,
  secondRange: 239,
  thirthRange: 219,
  lastRange: 149,
};
describe("Price calculator by tier", () => {
  it("calculate right price first range one subscription", () => {
    const priceCalculator = new PriceCalculatorByTier(1);
    expect(priceCalculator.getTotalPrice()).toBe(
      subscriptionsUnitPrices.firstRange
    );
  });

  it("calculate right price first range two subscription", () => {
    const priceCalculator = new PriceCalculatorByTier(2);
    expect(priceCalculator.getTotalPrice()).toBe(
      subscriptionsUnitPrices.firstRange * 2
    );
  });

  it("calculate right price second and first range tree subscription", () => {
    const priceCalculator = new PriceCalculatorByTier(3);
    expect(priceCalculator.getTotalPrice()).toBe(
      subscriptionsUnitPrices.firstRange * 2 +
        subscriptionsUnitPrices.secondRange
    );
  });
});
