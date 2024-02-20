import {Link} from "react-router-dom";

const Lab2 = () => {
  return (
    <>
      <h1>Lab1</h1>
      <nav>
        <Link className={'link'} to={"./zadanie1"}>Zadanie 1 RGB</Link>
        <Link className={'link'} to={"./zadanie2"}>Zadanie 2 współczynnik dwumianowy</Link>
        <Link className={'link'} to={"/"}>Labolatoria</Link>
      </nav>
    </>
  );
};

export default Lab2;
