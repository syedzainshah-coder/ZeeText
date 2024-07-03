import { useState } from 'react';
// import Grades from './Components/Grades';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import Textharry from './Components/Textharry';
import Alert from './Components/Alert';
// import TextForm from './Components/TextForm';
// import ReadChart from './Components/ReadChart';
 

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   Routes
// } from "react-router-dom";
 
function App() {
  const [mode, setMode] = useState("Light");

  function toggle() {
    if (mode == "Light") {
      document.body.style.color = "white";
      document.body.style.backgroundColor = "#1A2130";
      document.querySelector(".headerClass").style.backgroundColor = "dimgrey";
      let accBody = document.querySelectorAll(".accordion-body");
      let navlink = document.querySelectorAll(".nav-link");
      navlink.forEach((item) => {
        item.style.color = "white ";
      })
      accBody.forEach((item) => {
        item.style.color = "white";
        item.style.backgroundColor = "black";
      })
      let accbtn = document.querySelectorAll(".accordion-button");
      accbtn.forEach((btn) => {
        btn.style.color = "white";
        btn.style.backgroundColor = "black";
      })
      setMode("Dark");
      document.title = "TextTutils- Dark Mode "
      setInterval(() => {
        document.title = "TextTutils is amazing"
      }, 2000);
      setInterval(() => {
        document.title = "Install TextTutils"
      }, 1500);

    }
    else {
      document.body.style.color = "black";
      document.body.style.backgroundColor = "white";
      document.querySelector(".headerClass").style.backgroundColor = "white";
      let accBody = document.querySelectorAll(".accordion-body");
      let navlink = document.querySelectorAll(".nav-link");
      navlink.forEach((item) => {
        item.style.color = "black ";
      })
      accBody.forEach((item) => {
        item.style.color = "black";
        item.style.backgroundColor = "white";
      })
      let accbtn = document.querySelectorAll(".accordion-button");
      accbtn.forEach((btn) => {
        btn.style.color = "black";
        btn.style.backgroundColor = "white";
      })
      setMode("Light")
      document.title = "TextTutils- Light Mode ";
      setInterval(() => {
        document.title = "TextTutils is amazing"
      }, 2000);
      setInterval(() => {
        document.title = "Install Texttutils"
      }, 1500);
    }
  }
  // const [speed, setSpeed] = useState(0);
  // const [grade, setGrade] = useState(0);
  // const [age, setAge] = useState(0);
  // useEffect(() => {
  //   function AgeGrade() {
  //     if (grade == "1st" && (age =="6 years old" ||age=="7 years old")) {
  //       setSpeed(82);   
  //     }
  //     else  if (grade =="2nd" && (age =="7 years old" ||age=="8 years old")) {
  //       setSpeed(119);   
  //     } 
  //     else  if (grade == "3rd" && (age =="8 years old" ||age=="9 years old")) {
  //       setSpeed(135);   
  //     } 
  //     else  if (grade == "4th" && (age =="9 years old" ||age=="10 years old")) {
  //       setSpeed(152);   
  //     } 
  //     else  if (grade == "5th" && (age =="10 years old" ||age=="11 years old")) {
  //       setSpeed(167);   
  //     } 
  //     else  if ((grade=="6th" || grade=="7 years old"||grade=="8 years old") && (age =="11 years old" ||age=="12 years old"||age=="13 years old"||age=="14 years old")) {
  //       setSpeed(177);   
  //     } 
  //     else  if (grade == "High School" && (age =="14 years old" ||age=="15 years old" ||age=="16 years old" ||age=="17 years old "||age=="18 years old")) {
  //       setSpeed(250);   
  //     }     else  if (grade == "College" && (age =="18 years old" ||age=="23 years old")) {
  //       setSpeed(325);   
  //     } 
  //     else if(age=="Adult" && grade=="Anonymous")  {
  //       setSpeed(285);   
  //     } 
  //   }
  //   if (age==0 || grade==0) {
  //     setSpeed(0);
  //   } else {
  //     AgeGrade();
  //   }
  // }, [grade, age]);
  const [alert, setAlert] = useState();
  function showAlert(message, type) {

    let al = {
      msg: message,
      type: type
    }
    setAlert(al)
    setTimeout(() => {
      setAlert(null)
    }, 1500);


  }

  return (
    <>

<Navbar showAlert={showAlert} label="Code With Zain" list="TextTutils" mode={mode} toggle={toggle} />
        <Alert alert={alert} />
        <Textharry  showAlert={showAlert} />
      {/* <Router> */}
         
       
        {/* <Routes> */}
          {/* <Route  exact path="/about" element={<About />}></Route>
          <Route exact path="/textApp" element={}></Route> */}
{/* 
        </Routes> */}
      {/* </Router> */}




      {/* <About  /> */}


      {/* <ReadChart />
    <Grades age={age} grade={grade} Speed={speed}  setAge={setAge} setGrade={setGrade} />
    <TextForm heading="Write Text Below:" speed={speed}  />
    */}
    </>
  );
}

export default App;
