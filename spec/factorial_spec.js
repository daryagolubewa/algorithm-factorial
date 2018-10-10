describe("factorial()", function() {
  it("calculates 0 factorial", function() {
    expect(getFactorial(0)).toEqual(1);
  });

  it("calculates 1 factorial", function() {
    expect(getFactorial(1)).toEqual(1);
  });

  it("calculates 2 factorial", function() {
    expect(getFactorial(2)).toEqual(2);
  });

  it("calculates 3 factorial", function() {
    expect(getFactorial(3)).toEqual(6);
  });

  it("calculates 5 factorial", function() {
    expect(getFactorial(5)).toEqual(120);
  });

  it("calculates 10 factorial", function() {
    expect(getFactorial(10)).toEqual(3628800);
  });
});
