import sum from "./sum.js";
describe("sum function tests", () => {
    beforeEach(() => {
        console.log("Running test...");
    });
test("adds 2 + 2 equal to 4", () => {
    expect(sum(2, 2)).toBe(4);
});
test("adds -4+-4equal to -8", () => {
    expect(sum(-4, -4)).toBe(-8);
});

});