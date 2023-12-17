import {useLocation, useSearchParams} from "react-router-dom";
import './index.css'
import Footer from "../../footer/Footer";
import {useEffect, useState} from "react";
import Validation, {ValidationObject} from "../../../validation/validation";

const Ball = () => {
    console.log('Ball');
    const location = useLocation();
    const [searchParams] = useSearchParams(location.search);
    const radiusParam = searchParams.get('radius');

    const [radius, setRadius] = useState<ValidationObject>(
        {
            isValid: false,
            value: null,
            error: null
        }
    )

    useEffect(() => {
        const validatedRadius = new Validation(radiusParam)
            .isRequired('Parametr radius jest wymagany. Proszę dodać wymagany parametr do URL. \n Przykład: ?radius=10')
            .isNumber('Parametr musi być liczbą. Proszę podać poprawną wartość numeryczną.')
            .isPositive('Parametr musi być dodatni. Proszę podać dodatnią wartość.')
            .getResult();
        console.log({validatedRadius});
        setRadius(validatedRadius);
    }, [radiusParam]);

    console.log({radius});

    return (
        <div style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column', height: 'calc(100vh - 4rem )' }}>
            <div className="result-block">
                {radius?.isValid ?
                    <>
                        <div className="result">
                            <span>Render:</span>
                            <div className='ball' style={{
                                display: 'block',
                                width: `calc(2 * ${Number(radius.value)}cm)`,
                                height: `calc(2 * ${Number(radius.value)}cm)`,
                            }}/>
                        </div>
                        <div className={'result'}>
                            <span>Area:</span>
                            <div>{`${Math.PI * (Number(radius.value) * Number(radius.value)) }`} cm<sup><small>2</small></sup></div>
                        </div>
                    </>
                :
                    <div className="errors">
                        {radius.error}
                    </div>
                }
            </div>
            <Footer />
        </div>
    );
};

export default Ball;
