import { useState } from "react";
import { hex2rgb, validHex } from "../utils/validators";


export const Converter = () => {
  const [valueRgb, setValueRgb] = useState('rgb');
  const [bcgColor, setBcgColor] = useState('gray');

  function handlerColor({target}: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = target.value;

    if (inputValue.length >= 7 && !validHex(inputValue)) {
      setValueRgb('Ошибка!');
      setBcgColor('RGB(233, 75, 53)');
    } else if (inputValue.length === 7 && validHex(inputValue)) {
      setBcgColor(inputValue);
      setValueRgb(hex2rgb(inputValue));
    } else {
      setValueRgb('rgb');
      setBcgColor('grey');
    }
  }

  return (
    <div className="box" style={{backgroundColor: `${bcgColor}`}}>
      <input 
        className="hex-input"
        type="text"
        onChange={handlerColor}
      />
      <div className="rgb-result">{valueRgb}</div>
    </div>
  )
}


// #9A00FF