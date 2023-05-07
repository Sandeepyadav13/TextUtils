import React, { useState } from "react";

export default function Form(props) {
  const [text, setText] = useState("");
  const Handleupclick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showalert("Converted To Uppercase" ,"Success")
  };
  const HandleLoclick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showalert("Converted To LowerCase" ,"Success")
  };
  const Handleclclick = () => {
    let newText = " ";
    setText(newText);
    props.showalert("Clear Text" ,"Success")
  };
  const Handlecpclick = () => {
    let text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showalert("Copy To Clipboard" ,"Success")
  };    
  const Handlermclick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showalert("Remove Extra space" ,"Success")
  };
  function Handleonchange(event) {
    // console.log("onchange");
    setText(event.target.value);
  }
  return (
    <>
      <div>
        <div
          className="my-3 "
          style={{ color: props.mode === "dark" ? "white" : "black" }}
        >
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            {" "}
            <strong>Enter The Text Analyze</strong>
          </label>
          <textarea
            value={text}
            onChange={Handleonchange}
            className="form-control"
            style={{
              backgroundColor: props.mode === "dark" ? "black" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="exampleFormControlTextarea1"
            rows="9"
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1 bbtn" onClick={Handleupclick}>
          Convert To UpperCase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1  bbtn" onClick={HandleLoclick}>
          Convert To LowerCase
        </button>
        <button disabled={text.length===0} className="btn btn-primary bbtn" onClick={Handleclclick}>
          Clear Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1 bbtn" onClick={Handlecpclick}>
          Copy Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1 bbtn" onClick={Handlermclick}>
          Remove Extra Space
        </button>
      </div>
      <div
        className="container my-2"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h4>You Text Summary</h4>
        <p>
          {
            text.split(/\s+/).filter((Element) => {
              return Element.length !== 0;
            }).length
          }{" "}
          word and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(/\s+/).filter((Element) => {
              return Element.length !== 0;
            }).length}{" "}
          Minutes (Read time){" "}
        </p>
        <h4>Preview </h4>
        <p>{text.length > 0 ? text : "Nothing To Preview"}</p>
      </div>
    </>
  );
}
