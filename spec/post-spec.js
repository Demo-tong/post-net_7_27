'use strict';

describe("isFormatString", function () {
  it("check the number format", function () {
    let input = "12345-1234";
    let expected = true;

    expect(isFormatString(input)).toBe(expected);
  });

  it("check the number format_length", function () {
    let input = "1234";
    let expected = false;

    expect(isFormatString(input)).toBe(expected);
  });

  it("check the number format_letter", function () {
    let input = "1234a1234";
    let expected = false;

    expect(isFormatString(input)).toBe(expected);
  });
});

describe("getFormatNumbers", function () {
  it("to format the string and generate a array of number", function () {
    let input = "12345-1234";
    let expected = [1, 2, 3, 4, 5, 1, 2, 3, 4];

    expect(getFormatNumbers(input)).toEqual(expected);
  });
});


describe("getCheckDigit", function () {
  it("get check digit", function () {
    let inputs = [1, 2, 3, 4, 5, 1, 2, 3, 4];
    //let total = 25;
    let expected = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

    expect(getCheckDigit(inputs)).toEqual(expected);
  });
});

describe("generatePostCode", function () {
  it("get the post code", function () {
    let inputs = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
    let allZipCodes = loadZipCodes();
    //let expected = ":::||::|:|::||::|::|:|:|::::||::|:|::||::|::|:|:|:";
    let expected = "|:::||::|:|::||::|::|:|:|::::||::|:|::||::|::|:|:|:|";

    expect(generatePostCode(allZipCodes, inputs)).toEqual(expected);
  });
});

describe("isLegalPostCode", function () {
  it("to check the string", function () {
    let input = ":::||";
    let expected = true;

    expect(isLegalPostCode(input)).toBe(expected);
  });

  it("to check the false string", function () {
    let input = ":::*|";
    let expected = false;

    expect(isLegalPostCode(input)).toBe(expected);
  });
});

describe("getPostNumber", function () {
  it("change the postcode to numbercode", function () {
    let input = "| :::|| ::|:| ::||: :|::| :|:|: :::|| ::|:| ::||: :|::| :|:|: |";
    let expected = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

    let allZipCodes = loadZipCodes();
    expect(getPostNumber(allZipCodes, input)).toEqual(expected);
  });
});

describe("isLegalCheckDigit", function () {
  it("to check the checkdigit and return true", function () {
    let input = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
    let expected = true;

    expect(isLegalCheckDigit(input)).toBe(expected);
  });

  it("to check the checkdigit and return false", function () {
    let input = [1, 2, 3, 4, 5, 1, 2, 3, 4, 6];
    let expected = false;

    expect(isLegalCheckDigit(input)).toBe(expected);
  });
});

describe("formatPostNumber", function () {
  it("format the numbers(length = 9)", function () {
    let input = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
    let expected = "12345-1234";

    expect(formatPostNumber(input)).toEqual(expected);
  });

  it("format the numbers(length = 5", function () {
    let input = [1, 2, 3, 4, 4, 6];
    let expected = "12344";

    expect(formatPostNumber(input)).toEqual(expected);
  });
});