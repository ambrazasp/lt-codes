import {
  validate as validatePersonalCode,
  generate as generatePersonalCode,
} from "./src/person.js";

import {
  validate as validateCompanyCode,
  generate as generateCompanyCode,
} from "./src/company.js";

import { CODE_ERRORS } from "./src/common.js";

export const personalCode = {
  validate: validatePersonalCode,
  generate: generatePersonalCode,
};

export const companyCode = {
  validate: validateCompanyCode,
  generate: generateCompanyCode,
};

export const errorTypes = CODE_ERRORS;
