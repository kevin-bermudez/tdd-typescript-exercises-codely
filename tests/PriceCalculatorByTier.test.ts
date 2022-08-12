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
});
