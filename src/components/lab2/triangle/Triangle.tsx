//requirements:
// 1. wyliczyć obwód obrazu i jego powierzchnię, (weniks, bejca)
// 2. form 3inputs type number step 0.1
// 3. Validacja - isRequired, isNotNull, isNumber, isPositive, Custom check najdluzszy bok jest mniejszy
//niz suma 2 pozostalych bokow import {useLocation, useSearchParams} from "react-router-dom";
// import './index.css'
// import Footer from "../../footer/Footer";
// import {useEffect, useState} from "react";
// import Validation, {ValidationObject} from "../../../validation/validation";
//
//Przykładowy kod z walidacją:
// const Ball = () => {
//     console.log('Ball');
//     const location = useLocation();
//     const [searchParams] = useSearchParams(location.search);
//     const radiusParam = searchParams.get('radius');
//
//     const [radius, setRadius] = useState<ValidationObject>(
//         {
//             isValid: false,
//             value: null,
//             error: null
//         }
//     )
//
//     useEffect(() => {
//         const validatedRadius = new Validation(radiusParam)
//             .isRequired('Parametr radius jest wymagany. Proszę dodać wymagany parametr do URL. \n Przykład: ?radius=10')
//             .isNumber('Parametr musi być liczbą. Proszę podać poprawną wartość numeryczną.')
//             .isPositive('Parametr musi być dodatni. Proszę podać dodatnią wartość.')
//             .getResult();
//         console.log({validatedRadius});
//         setRadius(validatedRadius);
//     }, [radiusParam]);
//
//     console.log({radius});
//
//     return (
//         <div style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column', height: 'calc(100vh - 4rem )' }}>
//             <div className="result-block">
//                 {radius?.isValid ?
//                     <>
//                         <div className="result">
//                             <span>Render:</span>
//                             <div className='ball' style={{
//                                 display: 'block',
//                                 width: `calc(2 * ${Number(radius.value)}cm)`,
//                                 height: `calc(2 * ${Number(radius.value)}cm)`,
//                             }}/>
//                         </div>
//                         <div className={'result'}>
//                             <span>Area:</span>
//                             <div>{`${Math.PI * (Number(radius.value) * Number(radius.value)) }`} cm<sup><small>2</small></sup></div>
//                         </div>
//                     </>
//                 :
//                     <div className="errors">
//                         {radius.error}
//                     </div>
//                 }
//             </div>
//             <Footer />
//         </div>
//     );
// };
//
// export default Ball;
// na podstawie powyższych wymagań i przykladowego kodu stwórz komponenet triangle

import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import Footer from "../../footer/Footer";
import Validation, { ValidationObject } from "../../../validation/validation";



const Triangle = () => {
    console.log('Triangle');
    const location = useLocation();
    const [searchParams] = useSearchParams(location.search);

    const [sideA, setSideA] = useState<ValidationObject>(
        {
            isValid: false,
            value: null,
            error: null
        }
    );

    const [sideB, setSideB] = useState<ValidationObject>(
        {
            isValid: false,
            value: null,
            error: null
        }
    );

    const [sideC, setSideC] = useState<ValidationObject>(
        {
            isValid: false,
            value: null,
            error: null
        }
    );

    useEffect(() => {
        const validatedSideA = new Validation(searchParams.get('sideA'))
            .isRequired('Parametr sideA jest wymagany. Proszę dodać wymagany parametr do URL. \n Przykład: ?sideA=10')
            .isNumber('Parametr musi być liczbą. Proszę podać poprawną wartość numeryczną.')
            .isPositive('Parametr musi być dodatni. Proszę podać dodatnią wartość.')
            .getResult();
        setSideA(validatedSideA);

        const validatedSideB = new Validation(searchParams.get('sideB'))
            .isRequired('Parametr sideB jest wymagany. Proszę dodać wymagany parametr do URL. \n Przykład: ?sideB=10')
            .isNumber('Parametr musi być liczbą. Proszę podać poprawną wartość numeryczną.')
            .isPositive('Parametr musi być dodatni. Proszę podać dodatnią wartość.')
            .getResult();
        setSideB(validatedSideB);

        const validatedSideC = new Validation(searchParams.get('sideC'))
            .isRequired('Parametr sideC jest wymagany. Proszę dodać wymagany parametr do URL. \n Przykład: ?sideC=10')
            .isNumber('Parametr musi być liczbą. Proszę podać poprawną wartość numeryczną.')
            .isPositive('Parametr musi być dodatni. Proszę podać dodatnią wartość.')
            .customCheck(() => {
                // Custom check: najdłuższy bok jest mniejszy niż suma 2 pozostałych boków
                const a = Number(sideA.value);
                const b = Number(sideB.value);
                const c = Number(sideC.value);
                return a < b + c && b < a + c && c < a + b;
            }, 'Warunek najdłuższego boku nie jest spełniony.')
            .getResult();
        setSideC(validatedSideC);
    }, [searchParams, sideA, sideB, sideC]);

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', height: 'calc(100vh - 4rem )' }}>
            <div className="result-block">
                {sideA.isValid && sideB.isValid && sideC.isValid ?
                    <>
                        <div className="result">
                            <span>Render:</span>
                            <div className='triangle' style={{
                                display: 'block',
                                borderTop: `calc(${Number(sideA.value)}cm) solid transparent`,
                                borderRight: `calc(${Number(sideB.value)}cm) solid black`,
                                borderBottom: 'none',
                                borderLeft: `calc(${Number(sideC.value)}cm) solid transparent`,
                            }} />
                        </div>
                        <div className={'result'}>
                            <span>Perimeter:</span>
                            <div>{`${Number(sideA.value) + Number(sideB.value) + Number(sideC.value)}`} cm</div>
                        </div>
                        <div className={'result'}>
                            <span>Area:</span>
                            <div>{`${calculateTriangleArea(Number(sideA.value), Number(sideB.value), Number(sideC.value))}`} cm<sup><small>2</small></sup></div>
                        </div>
                    </>
                    :
                    <div className="errors">
                        {sideA.error || sideB.error || sideC.error}
                    </div>
                }
            </div>
            <Footer />
        </div>
    );
};

// Helper function to calculate the area of a triangle using Heron's formula
const calculateTriangleArea = (a: number, b: number, c: number): number => {
    const s = (a + b + c) / 2;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
};

export default Triangle;
