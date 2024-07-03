import React from 'react';
import "./Grade.css";

export default function Grades({ age, grade, Speed, setAge, setGrade, AgeGrade }) {
  const gradee = ["", "1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "High School", "College", "Anonymous"];
  const agee = ["", "6 years old", "7 years old", "8 years old","9 years old","10 years old" ,"11 years old","12 years old","13 years old","14 years old","15 years old","16 years old","17 years old","18 years old","19 years old","20 years old","21 years old","22 years old","23 years old","Adult"];

  function handleGrade(event) {
    const gradeValue = event.target.value;
    // setGrade(gradeValue || 0);
    setGrade(gradeValue? gradeValue:0)
  }

  function handleAge(event) {
    const ageValue = event.target.value;
    setAge(ageValue || 0);
  }

  return (
    <div className='container'>
      <div className="row">
        <div className="d-flex justify-content-evenly mt-3">
          <div className="col-4 bg-dark text-light rounded p-4 mx-4">
            <label htmlFor="gradeSelect" className='form-label'>Enter Grade</label>
            <select id="gradeSelect" className="select form-control" onChange={handleGrade} pl >
              {gradee.map((item, index) => (
                <option key={index} value={item}>{item}</option>
              ))}
            </select>
            <label htmlFor="ageSelect" className='form-label'>Enter Age</label>
            <select id="ageSelect" className="select form-control" onChange={handleAge}>
              {agee.map((item, index) => (
                <option key={index} value={item}>{item}</option>
              ))}
            </select>
          </div>
          <div className="col-4 p-5">
            <p><strong>Average Reading Speed:</strong> {Speed} WPM</p>
            <p><strong>Age:</strong> {age} </p>
            <p><strong>Grade:</strong> {grade}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
