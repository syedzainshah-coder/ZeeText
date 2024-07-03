import React, { useState } from 'react';
import PropTypes from 'prop-types'
  import "./text.css"


export default function TextForm({heading,speed}) {
  const [text, setText] = useState();
  const [character, charSet] = useState("0");
  const [paragraph, paraSet] = useState("0");
  const [Words, wordSet] = useState("0");
 

  function handletext(event) {
    let inputText = event.target.value;
    setText(inputText) 
    count(inputText)
}
 

  function convertUp() {
    let upperText = text.toUpperCase();
    setText(upperText)
  }
  function convertlow() {
    let lowText = text.toLowerCase();
    setText(lowText)
  }
  function count(text) {
    let Timespan=document.querySelector(".TimeSpan");
    let charlength = text.trim() != "" ? text.trim().length : "0"
    charSet(charlength);
    let paraLength = text.split(/\n+/).filter((para) => {
      return para.length > 0 ? para.trim().length : ""
    }).length;
    paraSet(paraLength);
    let words = text.split(/\s+/).filter((word) => {
    if(word.length>0){
 return word.length
    }
    }).length;
    wordSet(words);
     if(words){
      let readTime= words/speed;
      Timespan.textContent=`${readTime.toFixed(2)} minutes`;
     }

  }
  return (
   <>  
 
     <div className="container mt-5">
      <h3 className='mb-4'>{heading}</h3>
      <div className="row">
        <section className='d-flex justify-content-evenly mb-4'>
          <div className="col-4 " >
            <textarea className='form-control w-100 bg-dark text-light' onChange={handletext} value={text} rows={8} placeholder='Write Text Here....'></textarea>
            <div className='d-flex justify-content-center' >
              <button className="btn btn-primary mt-3 mx-2 " onClick={convertUp}>Uppercase</button>
              <button className="btn btn-success mt-3 " onClick={convertlow}>Lowercase</button>

            </div>
          </div>
          <div className="col-3  bg-success rounded  ">

            <p className='text-center my-3' ><strong> Character:</strong> <br /><span >{character}</span></p>
            <p className='text-center my-3'> <strong>Paragraph:</strong> <br /><span>{paragraph}</span></p>
            <p className='text-center my-3'> <strong>Words: </strong><br /><span>{Words}</span></p>
            <p className='text-center my-3'> <strong>Time it will take to read: </strong><br /><span className='TimeSpan'>0 minutes</span></p>

          </div>
        </section>


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
 