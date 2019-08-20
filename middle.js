const middle = function(arr) {
  const arrLength = arr.length;

  if (arrLength <= 2) return [];

  if (isEven(arrLength)) {

    const rangeMin = (arrLength / 2) - 1;
    const rangeMax = (arrLength / 2) + 1;
    return arr.slice(rangeMin, rangeMax);

  } else {
    return arr[(arrLength - 1) / 2];
  }
  
};

const isEven = function(number) {
  return number % 2 === 0;
};