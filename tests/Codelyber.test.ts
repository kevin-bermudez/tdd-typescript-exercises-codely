import { PriceCalculator } from "../src/PriceCalculator";

const subscriptionsUnitPrices = {
  firstRange: 299,
};
describe("Codelyber", () => {
  it("calculate right price first range one subscription", () => {
    const priceCalculator = new PriceCalculator(1);
    expect(priceCalculator.getTotalPrice()).toBe(
      subscriptionsUnitPrices.firstRange
    );
  });

  it("calculate right price first range two subscription", () => {
    const priceCalculator = new PriceCalculator(2);
    expect(priceCalculator.getTotalPrice()).toBe(
      subscriptionsUnitPrices.firstRange * 2
    );
  });
});
