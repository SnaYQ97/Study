import {Link} from "react-router-dom";
const Lab2 = () => {
    return (
        <>
            <h1>Lab2</h1>
            <nav>
                <Link className={'link'} to={"./kula"}>Kula</Link>
                <Link className={'link'} to={"./trojkat"}>Trójkąt</Link>
                <Link className={'link'} to={"/"}>Labolatoria</Link>
            </nav>
        </>
    );
};

export default Lab2;
