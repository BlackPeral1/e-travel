var chai = require("chai");
var assert = chai.assert;

import {
  calcuLateProfitOrLoss,
  getCrowdStatus,
} from "../services/transportRoute";
/*
  This will do the api testing for TransportRoute service layer functions

*/
describe("Testing TransportRoute service layer calculate profit funtion", () => {
  describe("Positive test case for caluculate profit function", () => {
    it("This test case should pass if since 2 -3 = -1", () => {
      assert.equal(calcuLateProfitOrLoss(2, 3), -1);
    });
  });
  describe("Negative test case for caluculate profit function", () => {
    it("This test case should pass if since 5 -3  != 0", () => {
      assert.notEqual(calcuLateProfitOrLoss(5, 3), 0);
    });
  });
});

describe("Testing TransportRoute service layer getCrowdStatus function", () => {
  describe("Positive test case for getCrowdStatus function", () => {
    it("This test case should pass if since 3-2  > 0 means its overcrowded", () => {
      assert.equal(getCrowdStatus(2, 3), "OverCrowded");
    });
  });
  describe("Negative test case for getCrowdStatus function", () => {
    it("This test case should pass if since 3-5  < 0 means it is not overcrowded", () => {
      assert.notEqual(getCrowdStatus(5, 3), "OverCrowded");
    });
  });
});

