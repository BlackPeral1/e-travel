var chai = require("chai");

var assert = chai.assert;
import { checkObjectEmptyAttributes } from "../services/timeTable";
import { inCompleteTimeTable, completeTimeTable } from "../database/testData";
/*
 This test case will test the check ObjectEmpty attribues function of timeTable service layer
*/
describe("Testing timeTable service layer checkObjectEmptyAttributes function", () => {
  describe("Positive test case for checkObjectEmptyAttributes function", () => {
    it("All attribues have value , then its passed", () => {
      assert.isTrue(
        checkObjectEmptyAttributes(completeTimeTable),
        "All attribues have value , then its passed"
      );
    });
  });
  describe("Negative test case for checkObjectEmptyAttributes function", () => {
    it("At least one attribue do not have value , then its passed", () => {
      assert.isFalse(
        checkObjectEmptyAttributes(inCompleteTimeTable),
        "At least one attribue do not have value , then its passed"
      );
    });
  });
});
