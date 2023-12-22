import {
  VALIDATION_ERRORS,
  getControlNumber,
  resultHandler,
  randomNumberToString,
} from './common';

export function validate(code: string) {
  if (!code) {
    return resultHandler(VALIDATION_ERRORS.EMPTY);
  }

  if (!/^[0-9]{9}$/.test(code)) {
    return resultHandler(VALIDATION_ERRORS.INVALID);
  }

  const regex = new RegExp('^([0-9]{8})([0-9])$', 'gi');
  const [_, __, controlNumber] = regex.exec(code) as any[];

  const numbersArray = code
    .slice(0, code.length - 1)
    .split('')
    .map((i) => Number(i));

  // check
  const generatedControlNumber = getControlNumber(numbersArray);

  if (generatedControlNumber === Number(controlNumber)) {
    return resultHandler();
  }

  return resultHandler(VALIDATION_ERRORS.INVALID_CONTROL_NUMBER);
}

export function generate(): any {
  const withoutControlNumber = randomNumberToString(8);

  const numbersArray = withoutControlNumber
    .split('')
    .map((i: any) => Number(i));

  const generatedControlNumber = getControlNumber(numbersArray);
  if (generatedControlNumber < 10) {
    return `${withoutControlNumber}${generatedControlNumber}`;
  }

  return generate();
}
