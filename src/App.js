
import { useRef, useState } from 'react';
import './App.css';
import { IoSpeedometerOutline } from 'react-icons/io5';
function App() {
  // bigger number will come down
  const [height, setHeight] = useState(0);
  const [Weight, setWeight] = useState(0);
  const Overlay = useRef(null);
  const tickRef = useRef(null);
  const [FP, setFP] = useState(0);
  var idealWeight = height - 100;
  function findFitnessPercent() {
    if (idealWeight > Weight) {
      var fPP = (Weight / idealWeight) * 100;
      // document.getElementById("tick").style.transformOrigin = "right center";
      tickRef.current.transform = "rotate(" + Math.floor(fPP) + "deg)";
      console.log(Math.floor(fPP));
      setFP(fPP.toFixed(2));
    } else {
      var fPP2 = (idealWeight / Weight) * 100;
      // document.getElementById("tick").style.transformOrigin = "right center";
      console.log(Math.floor(fPP2));
      // var roText = Math.floor(fPP2).toString();
      // document.getElementById("tick").style.transform = "rotate(" + roText + "deg)";
      setFP(fPP2.toFixed(2));
    }
    Overlay.current.style.width = "100vw";
    // console.log(FP);
    // document.getElementById("tick").style.transformOrigin = "right center";
    // document.getElementById("tick").style.transform = "rotate(" + FP + "deg)";
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

        <div className="layout-align">
          <div id="score-meter-1" className="layout-align">
            <div id="scorer-1-inner-div">
              <div id="scorer-1-inner-div-5">
                <div className="scorer-1-tick" ref={tickRef}>
                </div>
              </div>
            </div>
            <div id="scorer-1-inner-div-2"></div>
            <div id="scorer-1-inner-div-3"></div>
            <div id="scorer-1-inner-div-4"></div>
          </div>
        </div>
        <div className='lbl'>Fitness Percent : {FP}%</div>
      </div>
    </div>
  );
}

export default App;
