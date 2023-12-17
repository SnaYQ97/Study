import Validation, {ValidationValue} from "../validation";

const lastSideIsShorterThenSumOfOthers = (sides: {a: number, b: number, c: number}) => {
    console.log({sides})
    const {a, b, c} = sides;
    return a + b > c && a + c > b && b + c > a;
}

const triangleFormValidation = (
    value: ValidationValue,
    errorMessages: {[key: string]: string},
) => ({
    side: (sides: {a: number, b: number, c: number}) => new Validation(value)
        .isRequired(errorMessages.isRequired)
        .isNumber(errorMessages.isNumber)
        .isPositive(errorMessages.isPositive)
        // .customCheck(lastSideIsShorterThenSumOfOthers(sides), errorMessages.isSideShortetThenSumOfOther)
        .getResult(),
});

export default triangleFormValidation;
