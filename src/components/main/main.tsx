import {Link} from "react-router-dom";

const Main = () => {
    console.log("Main");
    return (
        <>
        <h1>Labs</h1>
    <nav>
        <Link className={'link'} to={"./lab1"}>Laboratorium 1</Link>
        <Link className={'link'} to={"./lab2"}>Laboratorium 2</Link>
    </nav>
        </>
            )
}

export default Main;
