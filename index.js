const person = require("./src/person");
const company = require("./src/company");
const common = require("./src/common");

module.exports = {
  ValidationError: common.VALIDATION_ERRORS,
  personalCode: person,
  companyCode: company,
};
