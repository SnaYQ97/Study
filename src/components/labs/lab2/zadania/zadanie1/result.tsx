import {useEffect, useState} from 'react';

const Result = () => {

  useEffect(() => {
    fetch('http://localhost:3000/hello')
      .then((response) => console.log(response))
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error))
      .finally(
        () => {
          setRgbDefinition({r: 255, g: 255, b: 255})
        }
      )
  }, [])

  const [rgbDefinition, setRgbDefinition] = useState({r: 0, g: 0, b: 0});

  return (
    <div style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "90px",
      height: "90px",
      display: "flex",
      boxSizing: "border-box",
      border: "1px solid black",
      alignItems: "flex-start",
      justifyContent: "center",
      flexDirection: "column",
      gap: "2px",
      padding: "10px",
      backgroundColor: `rgb(${rgbDefinition.r}, ${rgbDefinition.g}, ${rgbDefinition.b})`
    }}>
      <span>R: {rgbDefinition.r}</span>
      <span>G: {rgbDefinition.g}</span>
      <span>B: {rgbDefinition.b}</span>
    </div>
  );
};

export default Result;
