import './index.css'
import {useEffect, useState} from "react";
import {useLocation, useSearchParams, useNavigate} from "react-router-dom";

interface RGBDefinition {
  r: number;
  g: number;
  b: number;
}

const Zadanie1 = () => {
  const INITIAL_RGB_DEFINITION: RGBDefinition = {r: 0, g: 0, b: 0};
  const navigate = useNavigate();

  const [rgbDefinition, setRgbDefinition] = useState<RGBDefinition>(INITIAL_RGB_DEFINITION);
  const [rgbDefinitionToSend, setRgbDefinitionToSend] = useState<RGBDefinition>(INITIAL_RGB_DEFINITION);
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch('/lab2/zadanie1?r=' + rgbDefinitionToSend.r + '&g=' + rgbDefinitionToSend.g + '&b=' + rgbDefinitionToSend.b, {})
      .then((response) => response.json())
      .catch((error) => console.log(error))

    navigate('/lab2/zadanie1/?r=' + rgbDefinitionToSend.r + '&g=' + rgbDefinitionToSend.g + '&b=' + rgbDefinitionToSend.b);
  }

  const location = useLocation();
  const [searchParams] = useSearchParams(location.search);


  useEffect(() => {
    const r = searchParams.get('r');
    const g = searchParams.get('g');
    const b = searchParams.get('b');

    setRgbDefinition({r: Number(r), g: Number(g), b: Number(b)});
  }, [searchParams]);


  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setRgbDefinitionToSend({...rgbDefinitionToSend, [name]: value})
    console.log('ON_CHANGE', name, value);
  }


  return (
    <div style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      display: "flex",
      placeItems: "center",
      width: '200px',
      height: 'auto',
      aspectRatio: '1/1',
      padding: '50px',
      alignItems: "center",
      justifyContent: "center",
      boxSizing: "border-box",
      border: "1px solid black",
      backgroundColor: `rgb(${rgbDefinition.r}, ${rgbDefinition.g}, ${rgbDefinition.b})`,
    }}>
      <form action="" onSubmit={handleOnSubmit} style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        filter: 'invert(100%)',
        color: `rgb(${rgbDefinition.r}, ${rgbDefinition.g}, ${rgbDefinition.b})`,
      }}>
        <div className={"inputBox"}>
          <label htmlFor="r">R:</label>
          <input type="number" id="r" name="r" min="0" max="255" placeholder={String(rgbDefinition.r)}
                 onChange={onInputChange}/>
        </div>
        <div className={"inputBox"}>
          <label htmlFor="g">G:</label>
          <input type="number" id="g" name="g" min="0" max="255" placeholder={String(rgbDefinition.g)}
                 onChange={onInputChange}/>
        </div>
        <div className={"inputBox"}>
          <label htmlFor="b">B:</label>
          <input type="number" id="b" name="b" min="0" max="255" placeholder={String(rgbDefinition.b)}
                 onChange={onInputChange}/>
        </div>
        <input style={{
          marginTop: '10px',
          padding: '5px',
          color: 'black',
          backgroundColor: '#c183e8',
          border: 'none',
          cursor: 'pointer',
        }} type="submit" value="Submit"/>

      </form>
    </div>
  );
}


export default Zadanie1;
