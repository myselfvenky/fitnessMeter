
import { useRef, useState } from 'react';
import './App.css';
import { IoSpeedometerOutline } from 'react-icons/io5';
function App() {
  const [height, setHeight] = useState(0);
  const [Weight, setWeight] = useState(0);
  const Overlay = useRef(null);
  const [FP, setFP] = useState(0);
  var idealWeight = height - 100;
  function findFitnessPercent() {
    document.getElementById("tick").style.transformOrigin = "right center";
    if (idealWeight > Weight) {
      var fPP = (Weight / idealWeight) * 100;
      setFP(fPP.toFixed(2));
    } else {
      var fPP2 = (idealWeight / Weight) * 100;
      setFP(fPP2.toFixed(2));
    }

    Overlay.current.style.width = "100vw";
    setTimeout(() => {
      document.getElementById("hidemeter").style.display = "none"
      document.getElementById("showmeter").style.display = "block"
    }, 2000);
  }
  return (
    <div className="App">
      <div className='bigHeader'>
        Fitness Meter
        <IoSpeedometerOutline style={{ marginLeft: "10px" }} />
      </div>
      <div className='calBody'>
        <div className='lbl'>
          Height
        </div>
        <input onChange={(e) => {
          setHeight(e.target.value)
        }} className="in" />
        <div className='lbl'>
          Weight
        </div>
        <input onChange={(e) => {
          setWeight(e.target.value)
        }} className="in" />
        <button className="fP-btn" onClick={() => {
          findFitnessPercent();
        }}>Find Fitness Percentage</button>

      </div>
      <div className='overlay' ref={Overlay}>

        <div className="layout-alignh" id="hidemeter">
          <div id="score-meter-1h" className="layout-alignh">
            <div id="scorer-1-inner-divh">
              <div id="scorer-1-inner-div-5h">
                <div className="scorer-1-tickh">
                </div>
              </div>
            </div>
            <div id="scorer-1-inner-div-2h"></div>
            <div id="scorer-1-inner-div-3h"></div>
            <div id="scorer-1-inner-div-4h"></div>
          </div>
        </div>
        <div id="showmeter" style={{ display: "none" }}>
          <div className="layout-align" >
            <div id="score-meter-1" className="layout-align">
              <div id="scorer-1-inner-div">
                <div id="scorer-1-inner-div-5">
                  <div className="scorer-1-tick" id="tick" style={{ transform: `rotate(${FP * 1.8}deg)` }}>
                  </div>
                </div>
              </div>
              <div id="scorer-1-inner-div-2"></div>
              <div id="scorer-1-inner-div-3"></div>
              <div id="scorer-1-inner-div-4"></div>
            </div>
          </div>
        </div>
        <div className='lbl'>Fitness Percent : {FP}%</div>
      </div>
    </div>
  );
}

export default App;
