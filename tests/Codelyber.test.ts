import { PriceCalculator } from "../src/PriceCalculator";

describe("Codelyber", () => {
  it("calculate right price first range", () => {
    const priceCalculator = new PriceCalculator(1)
    expect(priceCalculator.getTotalPrice()).toBe(299)
  });
});
