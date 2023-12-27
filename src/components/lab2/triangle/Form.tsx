import Footer from "../../footer/Footer";
import validation, {ValidationObject} from "../../../validation/validation";
import {useMemo, useState} from "react";
import {INITIAL_VALIDATION_OBJECT} from "../../../constants/validation";
import triangleFormValidation from "../../../validation/lab2/triangleForm";

interface TriangleSides {
    sideA: ValidationObject;
    sideB: ValidationObject;
    sideC: ValidationObject;
}



const Form = () => {
    const [triangleSides, setTriangleSides] = useState<TriangleSides>({
        sideA: INITIAL_VALIDATION_OBJECT,
        sideB: INITIAL_VALIDATION_OBJECT,
        sideC: INITIAL_VALIDATION_OBJECT,
    })

    const [isFormValid, setIsFormValid] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName) => {
      setTriangleSides(prevState => {
            ...prevState,
            [fieldName]: triangleFormValidation(e.target.value).side()
          }
      )
    }

    return (
        <div>
            <form>
                <div className={'inputBox'}>
                    <label htmlFor={'sideB'}>Side B</label>
                    <input type="number" id="sideB" name="sideB" />
                    <span className={"error"}>errorMessages</span>
                </div>
                <div className={'inputBox'}>
                    <label htmlFor="sideA">Side A</label>
                    <input type="number" id="sideA" name="sideA" />
                    <span className={"error"}>error Messages</span>
                </div>
                <div className={'inputBox'}>
                    <label htmlFor={'sideC'}>Side C</label>
                    <input type="number" id="sideC" name="sideC" />
                    <span className={"error"}>errorMessages</span>
                </div>
            </form>
            <Footer/>
        </div>
    );
};

export default Form;
