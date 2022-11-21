export function getControlNumber(numbers, firstMultiplier = 1) {
  return (
    numbers
      .map((item, index) => item * (((index + firstMultiplier - 1) % 9) + 1))
      .reduce((acc, item) => acc + item, 0) % 11
  );
}

export function resultHandler(errorType = "", isException = false) {
  if (!errorType) {
    return { valid: true, isException };
  }

  return {
    valid: false,
    error: errorType,
  };
}

export function randomNumberToString(count = 3) {
  const maxNumber = Math.pow(10, count)
  return ("0".repeat(count) + Math.floor(Math.random() * maxNumber)).slice(-count);
} 

export const CODE_ERRORS = {
  EMPTY: "EMPTY",
  INVALID: "INVALID",
  INVALID_CONTROL_NUMBER: "INVALID_CONTROL_NUMBER",
  INVALID_DATE: "INVALID_DATE",
};
