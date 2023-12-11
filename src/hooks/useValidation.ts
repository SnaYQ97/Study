import {Value} from "../components/lab2/ball/Ball";

const useValidation = (value: Value, validator: (...args) => boolean, errorMessage: string, ...args) => {
    const isValid = validator(value, ...args);
    const error = !isValid ? errorMessage : null;

    return ({ isValid, error, value })
}

export default useValidation;
