export const defaultErrorMessages = {
    invalidMinLength: 'Value is to short',
    invalidMaxLength: 'Value is to long',
    invalidEmail: 'Invalid email',
    invalidRequired: 'Value is missing',
    invalidPositive: 'Value is negative',
    invalidNumber: 'Value is not a number',
}

export type ValidationValue = string | number | boolean | null;
export type ValidationResult = null | boolean;
export type ValidationErrorMessage = null | string;

export interface ValidationObject {
    value: ValidationValue;
    isValid: ValidationResult;
    error: ValidationErrorMessage;
}


class Validation {
    public value: ValidationValue
    public isValid: ValidationResult
    public error: ValidationErrorMessage;

    constructor(value) {
        this.value = value;
        this.isValid = true;
        this.error = '';
    }

    customCheck(customValidator: (...args) => boolean , errorMessage = '') {
        if (!this.isValid) return this;
        this.isValid = customValidator();
        this.error = errorMessage;

        return this;
    }

    isNumber(errorMessage = '') {
        if (!this.isValid) return this;
        this.isValid = !isNaN(Number(this.value));
        this.error = errorMessage || defaultErrorMessages.invalidNumber;

        return this;
    }

    minLength(min, errorMessage = '') {
        if (!this.isValid) return this;
        this.isValid = (this.value as string).length >= min;
        this.error = errorMessage || defaultErrorMessages.invalidMinLength;

        return this;
    }

    maxLength(max, errorMessage = '') {
        if (!this.isValid) return this;
        this.isValid = (this.value as string).length <= max;
        this.error = errorMessage || defaultErrorMessages.invalidMaxLength;

        return this;
    }

    isEmail(errorMessage = '') {
        if (!this.isValid) return this;
        const emailRegex = new RegExp('^[^\\s<>"\\\\;:]+@[a-zA-Z0-9.\\-_]+\\.[a-zA-Z0-9-_]+$');
        this.isValid = emailRegex.test(String(this.value));
        this.error = errorMessage || defaultErrorMessages.invalidEmail;

        return this;
    }

    isRequired(errorMessage = '') {
        if (!this.isValid) return this;

        this.isValid = this.value !== '' && this.value !== null;
        this.error = errorMessage || defaultErrorMessages.invalidRequired;

        return this;
    }

    isPositive(errorMessage = '') {
        if (!this.isValid) return this;

        this.isValid = this.value > 0;
        this.error = errorMessage || defaultErrorMessages.invalidPositive;

        return this;
    }

    getResult() {
        if (!this.isValid) return this;

        return {
            value: this.value,
            isValid: this.isValid,
            error: this.error,
        } as ValidationObject;
    }
}

export default Validation;
