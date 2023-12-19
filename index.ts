import * as company from './src/company';
import * as common from './src/common';
import * as person from './src/person';

export default {
  ValidationError: common.VALIDATION_ERRORS,
  personalCode: person,
  companyCode: company,
};
