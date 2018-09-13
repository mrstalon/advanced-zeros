module.exports = function getZerosCount(number, base) {
  // your implementation
  let zerosCount = 0;
  let devidersCount = 0;
  let devider = getDevider(base);

  for (let i = devider; i <= number; i+= devider) {
    let iCopy = i;

    while (iCopy % devider === 0) {
      iCopy /= devider;
      zerosCount++;
    }
  }

  return Math.floor(zerosCount / devidersCount);



  function getDevider(number) {
    const arrayOfFractions = [];
    let copyOfNumber = number;

    while(copyOfNumber >= 2) {
      if (copyOfNumber % 2 === 0) {
        arrayOfFractions.push(2);
        copyOfNumber /= 2;
      } else if (copyOfNumber % 3 === 0) {
        arrayOfFractions.push(3);
        copyOfNumber /= 3;
      } else if (copyOfNumber % 5 === 0) {
        arrayOfFractions.push(5);
        copyOfNumber /= 5;
      } else if (copyOfNumber % 7 === 0) {
        arrayOfFractions.push(7);
        copyOfNumber /= 7;
      } else if (copyOfNumber % 11 === 0) {
        arrayOfFractions.push(11);
        copyOfNumber /= 11;
      } else if (copyOfNumber % 13 === 0) {
        arrayOfFractions.push(13);
        copyOfNumber /= 13;
      } else {
        arrayOfFractions.push(copyOfNumber);
        break;
      }
    }

    let devider = arrayOfFractions[arrayOfFractions.length - 1];
    setDevirersCount(arrayOfFractions, devider);

    arrayOfFractions.sort((left, right) => left - right);
    return devider;
  }

  function setDevirersCount(array, devider) {
    array.forEach((fraction) => {
      if (fraction === devider) {
        devidersCount++;
      }
    });
  }
}

