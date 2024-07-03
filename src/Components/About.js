// import React, { useState } from 'react';
import "./Grade.css"
export default function About(prop) {
    // const [inputText, setInputText] = useState("");
    // const [btnText, setBtnText] = useState("Enable Dark Mode");
    // const [mystyle, setMyStyle] = useState({
    //     color: "black",
    //     backgroundColor: "white"
    // });

    // const removespaces = () => {
    //     let newText = inputText.split(/\s+/).join(' '); // Split by spaces and join without spaces
    //     setInputText(newText);
    // }

    // const handleText = (event) => {
    //     let text = event.target.value;
    //     setInputText(text);
    // }

    // function copyText() {
    //     window.navigator.clipboard.writeText(inputText);
    // }

    // const toggle = () => {
    //     if (mystyle.color === "black") {
    //         setMyStyle({
    //             color: "white",
    //             backgroundColor: "black"
    //         });
    //         setBtnText("Enable Light Mode");
    //     } else {
    //         setMyStyle({
    //             color: "black",
    //             backgroundColor: "white"
    //         });
    //         setBtnText("Enable Dark Mode");
    //     }
    // }

    return (
        <>
            <div className="container mt-5 rounded" >
                <h3>About us</h3>
                <div className="accordion p-5 rounded" id="parentAccordion">
                    <div className="accordion-item">
                        <h1 className='accordion-header' id="headingOne">
                            <button className='accordion-button' type='button' data-bs-toggle="collapse" data-bs-target="#collapseOne" >Home</button>
                        </h1>
                        <div id="collapseOne" className='accordion-collapse collapse' aria-labelledby='headingOne' data-bs-parent="#parentAccordion">
                            <div className="accordion-body" >
                                <ul>
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Contact</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h1 className='accordion-header' id="headingTwo">
                            <button className='accordion-button' type='button' data-bs-toggle="collapse" data-bs-target="#collapseTwo" >Contact</button>
                        </h1>
                        <div id="collapseTwo" className='accordion-collapse collapse' aria-labelledby='headingTwo' data-bs-parent="#parentAccordion">
                            <div className="accordion-body"  >
                                <ul>
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Contact</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h1 className='accordion-header' id="headingThree">
                            <button className='accordion-button' type='button' data-bs-toggle="collapse" data-bs-target="#collapseThree" >About</button>
                        </h1>
                        <div id="collapseThree" className='accordion-collapse collapse' aria-labelledby='headingThree' data-bs-parent="#parentAccordion">
                            <div className="accordion-body" >
                                <ul>
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Contact</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <button className="togbtn" onClick={prop.toggle}></button> */}
                {/* <div className='w-100'>
                    <textarea name="" id="" rows={8} value={inputText} onChange={handleText}></textarea>
                </div>
                <button onClick={copyText}>Copy</button>
                <button onClick={removespaces}>Remove Spaces</button> */}
                {/* <button onClick={toggle} className='btn btn-dark text-light'>{btnText}</button> */}
            </div>
        </>
    )
}
