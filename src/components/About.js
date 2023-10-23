import React, { useState } from "react";

export default function About(props) {
  const [myStyle, setMystyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const [btntext, setbtnText] = useState("Enable dark mode");

  const toggleStyle = () => {
    if (myStyle.color === "black") {
      setMystyle({
        color: "white",
        backgroundColor: "black",
      });
      setbtnText("Enable light mode");
    } else {
      setMystyle({
        color: "black",
        backgroundColor: "white",
      });
      setbtnText("Enable dark mode");
    }
  };
  
  return (
    <>
      <div>
        <div className="container py-4 px- pb-5 px-6 " style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey' }}>
          <h1>About US</h1>
          <div className="accordion" id="accordionExample "   style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey' }}>
            <div className="accordion-item"   style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey' }}>
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey' }}
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Accordion Item #1
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>This is the first item's accordion body.</strong> It
                  is shown by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey' }}>
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                  style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey' }}
                >
                  Accordion Item #2
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body"   style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey' }}>
                  <strong>This is the second item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item"   style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey' }}>
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree "
                  style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey' }}
                >
                  Accordion Item #3
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body"   style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey' }}>
                  <strong>This is the third item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
     
      </div>
    </>
  );
}
