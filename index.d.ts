declare namespace LtCodes {
  export enum CodeError {
    EMPTY = "EMPTY",
    INVALID = "INVALID",
    INVALID_CONTROL_NUMBER = "INVALID_CONTROL_NUMBER",
    INVALID_DATE = "INVALID_DATE",
  }

  interface ValidationResult {
    isValid: boolean;
    error?: CodeError;
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
