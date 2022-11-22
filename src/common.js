function getControlNumber(numbers, firstMultiplier = 1) {
  return (
    numbers
      .map((item, index) => item * (((index + firstMultiplier - 1) % 9) + 1))
      .reduce((acc, item) => acc + item, 0) % 11
  );
}

function resultHandler(errorType = "", isException = false) {
  if (!errorType) {
    return { isValid: true, isException };
  }

  return {
    isValid: false,
    error: errorType,
  };
}

function randomNumberToString(length = 3) {
  const maxNumber = Math.pow(10, length);
  const randNumber = Math.floor(Math.random() * maxNumber).toString();
  return randNumber.padStart(length, "0");
}

const VALIDATION_ERRORS = {
  EMPTY: "EMPTY",
  INVALID: "INVALID",
  INVALID_CONTROL_NUMBER: "INVALID_CONTROL_NUMBER",
  INVALID_DATE: "INVALID_DATE",
};

module.exports = {
  getControlNumber,
  resultHandler,
  randomNumberToString,
  VALIDATION_ERRORS,
};
