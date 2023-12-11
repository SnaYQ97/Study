import {useLocation, useSearchParams} from "react-router-dom";
import './index.css'
import Footer from "../../footer/Footer";
import {useEffect, useState} from "react";
import useValidation from "../../../hooks/useValidation";
import {Simulate} from "react-dom/test-utils";
import transitionEnd = Simulate.transitionEnd;
import {validateHeaderName} from "http";

export type Value = string | number | null

export interface ValidationObject  {
    isValid: boolean;
    error: string | null;
    value: Value;
}

export type ErrorMessages = {
    [key: string]: string;
}

const Ball = () => {
    console.log('Ball');
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams(location.search);
    const radiusParam = searchParams.get('radius');

    console.log({location, some: radiusParam, setSearchParams})
    console.log(radiusParam);

    const validation = {
        isNotNull: (val) => val !== null,
        isNotEmpty: (val) => val !== '',
        isNotNumber: (val) => isNaN(Number(val)),
        isNegative: (val) => val < 0,
        max: (val, max) => val > max,
        min: (val, min) => val < min,
    }


    const errorMessages = {
        isNull: 'Missing param radius. Please add ?radius=<number> to url',
        isMoreThen10: 'Pram is more then max value. Please define value smaller then 10',
    }

    const isNull = useValidation(radiusParam, validation.isNotNull, errorMessages.isNull);
    const isEmpty = radiusParam === '';
    const isNotNumber = isNaN(Number(radiusParam));
    const isNegative = !isNotNumber && Number(radiusParam) < 0;
    const isRadiusParamValid = !isNull && !isEmpty && !isNotNumber && !isNegative;
    const radius = isRadiusParamValid && Number(radiusParam);



    console.log(useValidation(radiusParam, errorMessages))

    const getErrors = () => {
        if(isNull) return 'Missing param radius. Please add ?radius=<number> to url';
        if(isEmpty) return 'Missing value for param radius. Please define number in your ?radius= param in url';
        if(isNotNumber) return 'Invalid param radius. Define numeric value';
        if(isNegative) return 'Negative pram value. Please add positive number ?radius=<number> to url';
    }

    return (
        <div style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column', height: 'calc(100vh - 4rem )' }}>
            <div className="result-block">
                {isRadiusParamValid ?
                  <>
                  <div className="result">
                    <span> Render:</span>
                    <div className='ball' style={{
                        display: 'block',
                        width: `calc(2 * ${radius}px)`,
                        height: `calc(2 * ${radius}px)`,
                    }} />
                  </div>
                  <div className={'result'}>
                     <span> Area:</span>
                     <div>{Math.PI * (radius * radius)}</div>
                  </div>
                  </>
                :
                    <div className="errors">
                        {getErrors()}
                    </div>
                }
            </div>
            <Footer />
        </div>
    );
};

export default Ball;
