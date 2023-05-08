import { add, subtract, multiply, divide, remainder } from ".";

test("should evaluate 2 if added 1 and 1 ", () => {
  const result = add(1, 1);
  expect(result).toBe(2);
});

test("should evaluate 204 if added 12 and 192", () => {
  const result = add(12, 192);
  expect(result).toBe(204);
});

test("should be 4823 if added -1020 and 5843", () => {
  const result = add(-1020, 5843);
  expect(result).toBe(4823);
});

test("should be 0 if subtract 1 from 1", () => {
  const result = subtract(1, 1);
  expect(result).toBe(0);
});
test("should be -180 if subtract 192 from 12", () => {
  const result = subtract(12, 192);
  expect(result).toBe(-180);
});
test("should be -6863 if subtract 5843 from -1020", () => {
  const result = subtract(-1020, 5843);
  expect(result).toBe(-6863);
});

test("should be 1 if multiply 1 and 1", () => {
  const result = multiply(1, 1);
  expect(result).toBe(1);
});

test("should be 2304 if multiply 12 and 192", () => {
  const result = multiply(12, 192);
  expect(result).toBe(2304);
});
test("should be -5959860 if multiply -1020 and 5843", () => {
  const result = multiply(-1020, 5843);
  expect(result).toBe(-5959860);
});

test("should be 1 if 1 is devided by 1", () => {
  const result = divide(1, 1);
  expect(result).toBe(1);
});

test("should be 0.0625 if 12 is devided by 192", () => {
  const result = divide(12, 192);
  expect(result).toBe(0.0625);
});
test("should be -0.17456785897655314 if -1020 is devided by 5843", () => {
  const result = divide(-1020, 5843);
  expect(result).toBe(-0.17456785897655314);
});

test("should return 1 as remainder left over when 1 is divided by 2", () => {
  const result = remainder(1, 2);
  expect(result).toBe(1);
});

test("should return 19 as remainder left over when 67 is divided by 24", () => {
  const result = remainder(67, 24);
  expect(result).toBe(19);
});

test("should return 0 as remainder left over when 231 is divided by 7", () => {
  const result = remainder(231, 7);
  expect(result).toBe(0);
});
