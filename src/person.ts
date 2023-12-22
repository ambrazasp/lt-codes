import moment, { Moment } from 'moment';

import {
  VALIDATION_ERRORS,
  getControlNumber,
  resultHandler,
  randomNumberToString,
} from './common';

const randomDate = (start: string | Moment, end: string | Moment) => {
  const endTime = +moment(end);
  const randomNumber = (to: number, from = 0) =>
    Math.floor(Math.random() * (to - from) + from);

  if (start) {
    const startTime = +moment(start);
    if (startTime > endTime) {
      throw new Error('End date is before start date!');
    }
    return moment(randomNumber(endTime, startTime));
  }
  return moment(randomNumber(endTime));
};

const getPersonControlNumber = (value: string) => {
  const numbersArray = value.split('').map((i) => Number(i));

  // first check
  const firstControlNumber = getControlNumber(numbersArray);

  if (firstControlNumber < 10) {
    return firstControlNumber;
  }

  // second check - only process if first control number is 10
  let secondControlNumber = getControlNumber(numbersArray, 3);

  // only applied if 10
  if (secondControlNumber === 10) {
    secondControlNumber = 0;
  }

  return secondControlNumber;
};

export function validate(code: string) {
  if (!code) {
    return resultHandler(VALIDATION_ERRORS.EMPTY);
  }

  if (!/^[1-6,9][0-9]{10}$/.test(code)) {
    return resultHandler(VALIDATION_ERRORS.INVALID);
  }

  const regex = new RegExp(
    '^([1-6,9])([0-9]{2})([0-9]{2})([0-9]{2})[0-9]{3}([0-9])$',
    'gi'
  );

  const [_, centurySex, yearShort, month, day, controlNumber] = regex.exec(
    code
  ) as any[];

  let year;
  if (Number(centurySex) < 3) {
    year = `18${yearShort}`;
  } else if (Number(centurySex) < 5) {
    year = `19${yearShort}`;
  } else if (Number(centurySex) < 7) {
    year = `20${yearShort}`;
  }

  const monthDayException = !Number(month) || !Number(day);

  // exceptions for first number (9) and/or month/day that is '00'
  if (!year || monthDayException) {
    return resultHandler('', true);
  }

  const dateIsValid = moment(`${year}-${month}-${day}`, 'YYYY-MM-DD').isValid();

  if (!dateIsValid) {
    return resultHandler(VALIDATION_ERRORS.INVALID_DATE);
  }

  const generatedControlNumber = getPersonControlNumber(
    code.slice(0, code.length - 1)
  );

  if (generatedControlNumber === Number(controlNumber)) {
    return resultHandler();
  }

  return resultHandler(VALIDATION_ERRORS.INVALID_CONTROL_NUMBER);
}

export function generate() {
  const randDate = randomDate('1900-01-01', moment());

  const randSex = Math.floor(Math.random() * 2);
  let sexes = [5, 6];
  if (randDate.year() < 2000) {
    sexes = [3, 4];
  }

  const randQueueNumber = randomNumberToString(3);
  const date = randDate.format('YYMMDD');

  const withoutControlNumber = `${sexes[randSex]}${date}${randQueueNumber}`;

  const generatedControlNumber = getPersonControlNumber(withoutControlNumber);

  return `${withoutControlNumber}${generatedControlNumber}`;
}
