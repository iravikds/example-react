import { useState } from 'react';
import './App.css';

function App() {

  const [flag1, setFlag1] = useState(false);
  const [flag2, setFlag2] = useState(false);
  const [flag3, setFlag3] = useState(false);
  const [flag4, setFlag4] = useState(false);
  const [flag5, setFlag5] = useState(false);
  const [flag6, setFlag6] = useState(false);
  const [flag7, setFlag7] = useState(false);
  const [flag8, setFlag8] = useState(false);
  const [flag9, setFlag9] = useState(false);
  const [flag10, setFlag10] = useState(false);
  const [flag11, setFlag11] = useState(false);
  const [flag12, setFlag12] = useState(false);
  const [flag13, setFlag13] = useState(false);
  const [flag14, setFlag14] = useState(false);
  const [flag15, setFlag15] = useState(false);
  const [flag16, setFlag16] = useState(false);

  const changeColor1 = () =>{
    setFlag1(!flag1);
  }
  const changeColor2 = () =>{
    setFlag2(!flag2);
  }
  const changeColor3 = () =>{
    setFlag3(!flag3);
  }
  const changeColor4 = () =>{
    setFlag4(!flag4);
  }
  const changeColor5 = () =>{
    setFlag5(!flag5);
  }
  const changeColor6 = () =>{
    setFlag6(!flag6);
  }
  
  const changeColor7 = () =>{
    setFlag7(!flag7);
  }
  const changeColor8 = () =>{
    setFlag8(!flag8);
  }
  const changeColor9 = () =>{
    setFlag9(!flag9);
  }
  const changeColor10 = () =>{
    setFlag10(!flag10);
  }
  const changeColor11 = () =>{
    setFlag11(!flag11);
  }
  const changeColor12 = () =>{
    setFlag12(!flag12);
  }
  const changeColor13 = () =>{
    setFlag13(!flag13);
  }
  const changeColor14 = () =>{
    setFlag14(!flag14);
  }
  const changeColor15 = () =>{
    setFlag15(!flag15);
  }
  const changeColor16 = () =>{
    setFlag16(!flag16);
  }

  return (
    <div className="App">
      <table border="1">
        <tbody>
          <tr>
            <td onClick={changeColor1} className={flag1 ? "red": "blue"}></td>
            <td onClick={changeColor2} className={flag2 ? "red": "blue"}></td>
            <td onClick={changeColor3} className={flag3 ? "red": "blue"}></td>
            <td onClick={changeColor4} className={flag4 ? "red": "blue"}></td>
          </tr>
          <tr>
            <td onClick={changeColor5} className={flag5 ? "red": "blue"}></td>
            <td onClick={changeColor6} className={flag6 ? "red": "blue"}></td>
            <td onClick={changeColor7} className={flag7 ? "red": "blue"}></td>
            <td onClick={changeColor8} className={flag8 ? "red": "blue"}></td>
          </tr>
          <tr>
            <td onClick={changeColor9} className={flag9 ? "red": "blue"}></td>
            <td onClick={changeColor10} className={flag10 ? "red": "blue"}></td>
            <td onClick={changeColor11} className={flag11 ? "red": "blue"}></td>
            <td onClick={changeColor12} className={flag12 ? "red": "blue"}></td>
          </tr>
          <tr>
            <td onClick={changeColor13} className={flag13 ? "red": "blue"}></td>
            <td onClick={changeColor14} className={flag14 ? "red": "blue"}></td>
            <td onClick={changeColor15} className={flag15 ? "red": "blue"}></td>
            <td onClick={changeColor16} className={flag16 ? "red": "blue"}></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
