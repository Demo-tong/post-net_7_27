'use strict'

function isFormatString(zipCodeString) {
  let result = [];

  let temp = zipCodeString.replace('-', '');
  temp = temp.split('');

  if (temp.length === 5 || temp.length === 9) {
    temp.forEach(function (item) {
      result.push(parseInt(item));
    });
    for (let item of result) {
      if (!(item >= 0 && item <= 9)) {
        return false;
      }
    }
    return true;
  }
  return false;
}

function getFormatNumbers(zipCodeString) {
  let formatedNumbers = [];

  let temp = zipCodeString.replace('-', '').split("");
  temp.forEach(function (item) {
    formatedNumbers.push(parseInt(item));
  });

  return formatedNumbers;
}

function getCheckDigit(formatedNumbers) {
  let total = 0;
  let includeCDNumbers = formatedNumbers.slice(0);

  includeCDNumbers.forEach(function (item) {
    total += item;
  });
  for (let i = 0; i < 65535; ++i) {
    if ((total + i) === 30) {
      includeCDNumbers.push(i);
      break;
    }
  }
  return includeCDNumbers;
}

function generatePostCode(allZipCodes, includeCDNumbers) {
  let postCode = "";

  includeCDNumbers.forEach(function (item) {
    postCode += allZipCodes[item];
  });

  postCode = '|' + postCode + '|';
  return postCode;
}

//toZipCode
function isLegalPostCode(postCodeString) {
  let myString = postCodeString.split("");

  let exist = myString.find(function (item) {
    return item !== ':' && item !== ' ' && item !== '|';
  });

  return exist ? false : true;
}

function getPostNumber(allZipCodes, postCodeString) {
  let postNumber = [];
  let postCodeArray = postCodeString.split(" ");
  let temp = postCodeArray.slice(1, postCodeArray.length - 1);

  temp.forEach(function (item) {
    let pos = allZipCodes.indexOf(item, 0);
    if (pos) {
      postNumber.push(pos);
    }
  });

  return postNumber;
}

function isLegalCheckDigit(postNumber) {
  let total = 0;

  postNumber.forEach(function (item) {
    total += item;
  });

  return (total % 10) ? false : true;
}

function formatPostNumber(postNumber) {
  let temp = postNumber.slice(0);

  if (temp.length === 10) {
    temp.splice(5, 0, '-');
  }
  temp.pop();

  return temp.join('');

}
