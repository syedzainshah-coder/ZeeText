import React from 'react'

export default function ReadChart() {
    //     function hide(){    
    //  document.querySelector(".maindiv").classList.toggle("hide")
    //     }
    return (
        <>
            {/* <button className='btn btn-outline-success ms-4 mt-3' onClick={hide}>Preview rules</button> */}
            <div className="container mt-5">
               <div className="row">
               <div className="accordion " id="parentAccordion">
                    <div className="accordion-item">
                        <h1 className='accordion-header' id="headingOne">
                            <button className='accordion-button ' type='button' data-bs-toggle="collapse" data-bs-target="#collapseOne">Preview Rules</button>
                        </h1>
                        <div id="collapseOne" className='accordion-collapse collapse show' aria-labelledby='#headingOne' data-bs-parent="#parentAccordion">
                            <div className="accordion-body">
                                <div className="container  mb-5 maindiv bg-dark text-light rounded">

                                    <div className="row">
                                        <div className="d-flex justify-content-center">
                                            <div className="col-5">
                                                <h2>Average Reading Speed by Age and Grade Level</h2>
                                                <p>The chart below includes the average reading fluency rates by grade level and age.</p>
                                                <section className='d-flex justify-content-between '>
                                                    <div className='col-9 me-4'>
                                                        <h6 className='bg-info rounded text-center '>Grade Level and Age</h6>
                                                        <p>1st Grade (Spring)
                                                            6-7 years old</p>
                                                        <p>
                                                            2nd Grade (Spring)
                                                            7-8 years old
                                                        </p>
                                                        <p>
                                                            3rd Grade (Spring)
                                                            8-9 years old
                                                        </p>
                                                        <p>
                                                            4th Grade (Spring)
                                                            9-10 years old
                                                        </p>
                                                        <p>
                                                            5h Grade (Spring)
                                                            10-11 years old
                                                        </p>
                                                        <p>
                                                            6th-8th Grade (Spring)
                                                            11, 12, 13, 14 years old
                                                        </p>
                                                        <p>
                                                            Highschool
                                                            14, 15, 16, 17, 18 years old
                                                        </p>
                                                        <p>
                                                            College
                                                            18-23 years old
                                                        </p>
                                                        <p>
                                                            Adults
                                                        </p>
                                                    </div>
                                                    <div className='col-5  '>
                                                        <h6 className='bg-info rounded text-center '>Words-Per-Minute</h6>
                                                        <p>53 – 111 wpm</p>
                                                        <p>
                                                            89 – 149 wpm
                                                        </p>
                                                        <p>
                                                            107 – 162 wpm
                                                        </p>
                                                        <p>
                                                            123 – 180 wpm
                                                        </p>
                                                        <p>
                                                            139 – 194 wpm
                                                        </p>
                                                        <p>
                                                            150 – 204 wpm
                                                        </p>
                                                        <p>
                                                            200 – 300 wpm
                                                        </p>
                                                        <p>
                                                            300 – 350 wpm
                                                        </p>
                                                        <p>220 – 350 wpm</p>
                                                    </div>
                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               </div>
            </div>


        </>

    )
}
