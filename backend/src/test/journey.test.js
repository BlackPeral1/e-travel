var chai = require("chai");

var assert = chai.assert;
import { calCulateJourneyFare } from "../services/journey";

describe("Testing jouerny service layer calCulateJourneyFare function with", () => {
  describe("Positive test case for calCulateJourneyFare function - Test input 01 ", () => {
    it("For one way travel , according to distance * priceperjourney, actual value 10*5=50 ", () => {
      assert.equal(calCulateJourneyFare("one-way", 10, 5), 50);
    });
  });
  describe("Negative test case for calCulateJourneyFare function - Test input 01 ", () => {
    it("For one way travel , according to distance * priceperjourney, actual value 10*5=50  but here we have check for negative scenario , therefore it should passed if value is not equal to 100", () => {
      assert.notEqual(calCulateJourneyFare("one-way", 10, 5), 40);
    });
  });
  describe("Positive test case for calCulateJourneyFares function - Test input 02", () => {
    it("For a two way travel , according to distance * priceperjourney * 2, actual value 10*5 *2 =100 ", () => {
      assert.equal(calCulateJourneyFare("two-way", 10, 5), 100);
    });
  });
  describe("Negative test case for calCulateJourneyFare function - Test input 02", () => {
    it("For two way travel , according to distance * priceperjourney * 2, actual value 10*5*2 =100  but here we have check for negative scenario , therefore it should passed if value is not equal to 100 ", () => {
      assert.notEqual(calCulateJourneyFare("two-way", 10, 5), 80);
    });
  });
  describe("Positive test case for calCulateJourneyFares function - Test input 03", () => {
    it("Check for empty journeytype ", () => {
      assert.equal(calCulateJourneyFare("", 10, 5), "Invalid");
    });
  });
  describe("Negative test case for calCulateJourneyFare function - Test input 04", () => {
    it("Check for Invalid output , case is passed if output is not equal to 80 ", () => {
      assert.notEqual(calCulateJourneyFare("one-way", 10, "5i"), 80);
    });
  });
});
