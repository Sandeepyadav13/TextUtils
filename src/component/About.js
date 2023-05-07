import React from "react";

export default function About(props) {
  return (
    <div>
      <h2
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        About Us
      </h2>
      <div class="card"   style={{
              backgroundColor: props.mode === "dark" ? "#2581d9" : "white",
              color: props.mode === "dark" ? "white" : "black",
              border: props.mode === "dark" ? "white solid 1px " : "black solid 1px ",
              
            }} >
        <div class="card-body " >
          <div>
            <b>Analyze Your text </b>
            </div> <br />
        TextUtils gives you a way to a  nalyze your text quickly and efficiently .Be it word count , character count ,convert uppercase ,convert lowercase ,and clear text, remove extra space , copy text</div>
      </div>
    </div>
  );
}
