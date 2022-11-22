declare namespace LtCodes {
  enum ValidationError {
    EMPTY = "EMPTY",
    INVALID = "INVALID",
    INVALID_CONTROL_NUMBER = "INVALID_CONTROL_NUMBER",
    INVALID_DATE = "INVALID_DATE",
  }

  export interface ValidationResult {
    isValid: boolean;
    error?: ValidationError;
    isException?: boolean;
  }

  var companyCode: {
    validate(code: string): ValidationResult;
    generate(): string;
  };

  var personalCode: {
    validate(code: string): ValidationResult;
    generate(): string;
  };
}

export = LtCodes;
