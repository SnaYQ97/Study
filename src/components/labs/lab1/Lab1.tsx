import {Link} from "react-router-dom";

const Lab1 = () => {
    return (
        <>
            <h1>Lab1</h1>
            <nav>
                <Link className={'link'} to={"./zadanie1"}>Zadanie 1</Link>
                <Link className={'link'} to={"/"}>Labolatoria</Link>
            </nav>
        </>
    );
};

export default Lab1;
