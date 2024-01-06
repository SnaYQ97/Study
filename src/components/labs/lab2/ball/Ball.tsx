import { useLocation, useSearchParams } from "react-router-dom";
import './index.css'
import Footer from "@components/footer/Footer";
import {useEffect, useMemo, useState} from "react";
import Validation, { ValidationObject } from "@/validation/validation";

const Ball = () => {
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
        setRadius(validatedRadius);
    }, [radiusParam]);

    const circleArea = useMemo(() => {
        if (radius.isValid) {
            return Math.PI * Math.pow(Number(radius.value), 2);
        }
        return null;
    }, [radius]);

    return (
        <div style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column', height: 'calc(100vh - 4rem )' }}>
            <div className="result-block">
                {radius?.isValid ?
                    <>
                        <div className={'result'}>
                            <span>Area:</span>
                            <div>{circleArea} cm<sup><small>2</small></sup></div>
                        </div>
                    </>
                :
                    <div className="errors">
                        <b>Error:</b> {radius.error}
                    </div>
                }
            </div>
            <Footer />
        </div>
    );
};

export default Ball;
