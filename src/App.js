import { useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./component/Navbar";
import Form from "./component/Form";
import Alert from "./component/Alert";
// import About from "./component/About";

function App() {
  const [mode, setmode] = useState("light");

  const [alert, setalert] = useState("null");
  const showalert = (message, type) => {
    setalert({ msg: message, type: type });
  };

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "black";
      showalert("Dark Mode has been enable", "Success");
      // document.title = "TextUtils-DarkMode";
      // setInterval(() => {
      //   document.title = "TextUtils-Home";
      // }, 2000);
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalert("Light Mode has been enable", "Success");
      // document.title = "TextUtils-LightMode";
      // setInterval(() => {
      //   document.title = "TextUtils-Home";
      // }, 2000);
    }
  };
  setTimeout(() => {
    setalert(null);
  }, 2000);

  return (
    <>
      {/* <BrowserRouter> */}
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          {/* <Routes> */}
          <Form mode={mode} showalert={showalert}/>
          {/* <Route path="/" element={<Form mode={mode} showalert={showalert}/>}/> */}
          {/* <About  mode={mode} /> */}
            {/* <Route path="About" element={<About  mode={mode} />} /> */}
          {/* </Routes> */}
        </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
