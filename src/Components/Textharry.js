import React, { useState } from 'react';
import PropTypes from 'prop-types'



export default function TextForm(prop) {
    const [text, setText] = useState("");
    const clearText = () => {
     if(text==""){
       
        prop.showAlert("Text Not Cleared!","danger")

     }
     else{
        setText("");
        prop.showAlert("Text Cleared.","success")
     
     }
    }
    const copyText = () => {
   if(text==""){
    prop.showAlert("Text Not Copied.","danger")
   }
   else{
    navigator.clipboard.writeText(text)
    prop.showAlert("Copied to Clipboard.","success")
   }
    }


    function handletext(event) {
        let inputText = event.target.value;
        setText(inputText)
    
    }


    function convertUp() {
       if(text==""){
        prop.showAlert("Enter Some Text To Be Converted to UpperCase.","danger")
       }
       else{
        let upperText = text.toUpperCase();
        setText(upperText)
        prop.showAlert("Text Converted To UpperCase.","success")
       }
    }
    function convertlow() {
       if(text==""){
        prop.showAlert("Enter Some Text To Be Converted to LowerCase.","danger")
       }
       else{
        let lowText = text.toLowerCase();
        setText(lowText)
        prop.showAlert("Text Converted To LowerCase.","success")
       }
    }

    return (
        <>

            <div className="container mt-5">
                <h3 className='mb-4'>Write Text Below:</h3>
                <div className="row">
                 <div className='d-flex justify-content-center'>
                 <div className="col-6 " >
                        <textarea className='form-control w-100 bg-dark text-light' onChange={handletext} value={text} rows={8} placeholder='Write Text Here....'></textarea>
                        <div className='d-flex justify-content-evenly'    >
                            <button className="btn btn-primary mt-3 mx-2 " onClick={convertUp}>Uppercase</button>
                            <button className="btn btn-success mt-3  " onClick={convertlow}>Lowercase</button>
                            <button className="btn btn-info mt-3 " onClick={clearText}>Clear Text</button>
                            <button className="btn btn-dark mt-3 " onClick={copyText}>Copy Text</button>

                        </div>
                    </div>
                 </div>
                    



                </div>

            </div>
        </>
    )
}
TextForm.propTypes = {
    heading: PropTypes.string.isRequired
}
TextForm.defaultProps = {
    heading: "Some heading here"
}
