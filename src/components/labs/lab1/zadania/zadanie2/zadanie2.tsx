import './index.css'
import {DateTime} from "luxon";

const Zadanie2 = () => {
    return (
        <div className={'zadanie2'}>
            <h1>Zadanie 2: Bieżąca data i godzina</h1>
            <p>
                Czas wejścia na stronę to:
                <b>{` ${DateTime.local().toFormat('HH:mm:ss')}`}</b>
            </p>
        </div>
    );
};

export default Zadanie2;
