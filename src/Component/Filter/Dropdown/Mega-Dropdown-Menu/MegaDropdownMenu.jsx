import React, { useState, useEffect, useRef } from "react";
import "./MegaDropDown.css"

const MegaDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isInput1Open, setIsInput1Open] = useState(false)
  const [input1Value, setInput1Value] = useState(0);
  const [isInput2Open, setIsInput2Open] = useState(false);
  const [input2Value, setInput2Value] = useState("Any");
  const dropdownRef = useRef(null);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
    //   };
      useEffect(() => {
        const handleClickOutside = (event) => {
          if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)
          ) {
            setIsOpen(false);
          }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () =>
          document.removeEventListener("mousedown", handleClickOutside);
      }, []);
  
    //input box 1 (Minimum)
  const handleInputChange1 = (e) => {
    setInput1Value(e.target.value);
    };
    
  const handleListClickInputBox1 = (value) => {
    setInput1Value(value);
    setIsInput1Open(false);
   };

//inputbox2 (Maximum)
  const handleInputChange2 = (e) => {
    setInput2Value(e.target.value);
  };
  const handleListClickInputBox2 = (value) => {
      setInput2Value(value);
      setIsInput2Open(false);
  }

    
//buttons 
  const handleButtonClick = () => {
    console.log("Button clicked");
    // Add your logic here
    };
    const handleClearAll = () => {
        setInput1Value(0);
        setInput2Value("Any");
    };
    
  return (
    <div className="mega-dropdown" ref={dropdownRef}>
      <div className="dropdown-header">
        <span>Sqft</span>
        <input
          type="text"
          placeholder="Area (sqft)"
          value={`${input1Value} - ${input2Value}`}
          onClick={() => setIsOpen(!isOpen)}
          readOnly
        />
        <i className={`fas fa-chevron-${isOpen ? "up" : "down"}`}></i>
      </div>
      {isOpen && (
        <div className="dropdown-menu">
          <div className="menu-row">
            <input
              type="text"
              placeholder="0"
              value={input1Value}
              onChange={handleInputChange1}
              onClick={() => setIsInput1Open(!isInput1Open)}
            />
            {isInput1Open && (
              <div className="menu">
                <ul className="list">
                  <ul className="list">
                    <li onClick={() => handleListClickInputBox1(0)}>0</li>
                    <li onClick={() => handleListClickInputBox1(800)}>800</li>
                    <li onClick={() => handleListClickInputBox1(1000)}>1000</li>
                    <li onClick={() => handleListClickInputBox1(1200)}>1200</li>
                    <li onClick={() => handleListClickInputBox1(1400)}>1400</li>
                  </ul>
                </ul>
              </div>
            )}
            <input
              type="text"
              placeholder="Any"
              value={input2Value}
              onChange={handleInputChange2}
              onClick={() => setIsInput2Open(!isInput2Open)}
            />
            {isInput2Open && (
              <div className="menu">
                <ul className="list">
                  <li onClick={() => handleListClickInputBox2("Any")}>Any</li>
                  <li onClick={() => handleListClickInputBox2(800)}>800</li>
                  <li onClick={() => handleListClickInputBox2(1000)}>1000</li>
                  <li onClick={() => handleListClickInputBox2(1200)}>1200</li>
                  <li onClick={() => handleListClickInputBox2(1400)}>1400</li>
                </ul>
              </div>
            )}
          </div>
          <div className="menu-row">
            <button onClick={handleClearAll} className="button1">
              Reset
            </button>
            <button onClick={handleButtonClick} className="button2">
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MegaDropdown;
