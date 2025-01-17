import {
    validateNumberInput,
    calculateMidpointRate,
    formatNumber,
  } from ".";
  
  describe("Utility Functions", () => {
    test("validateNumberInput should remove non-numeric characters", () => {
      expect(validateNumberInput("12abc3.45")).toBe("123.45");
      expect(validateNumberInput("abc")).toBe("");
      expect(validateNumberInput("0.123")).toBe("0.12");
    });
  
    test("calculateMidpointRate should return correct midpoint", () => {
      expect(calculateMidpointRate("1.0", "2.0")).toBe(1.5);
      expect(calculateMidpointRate("5", "5")).toBe(5);
    });
  
    test("formatNumber should format large numbers with commas", () => {
      expect(formatNumber("1234567.89")).toBe("1,234,567.89");
      expect(formatNumber("1000")).toBe("1,000");
    });
  });
  