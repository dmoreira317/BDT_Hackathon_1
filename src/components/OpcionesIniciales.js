import React, { useState } from "react";
import { Fragment } from "react";
import { Navbar, Form } from "react-bootstrap";
import FormularioLogin from "./FormularioLogin";
import App from "../App.js";

const OpcionesIniciales = (props) => {
  const [clicked, setclicked] = useState(false);

  //   function goToSignUp() {
  // //     if (clicked) {
  // //      return (
  // //       setclicked(false);)
  // //     } else {
  // //       return (setclicked(true);
  // //       console.log(clicked);)
  // //     }

  // //     return clicked;
  //   }

  return (
    <Fragment>
      <div className="float-left container">
        <h2>¡Únete a la comunidad!</h2>
        <p className="text-muted">
          Para empezar, dinos que cuenta te gustaría abrir.
        </p>
      </div>
      <Form>
        <div className="w-100">
          <button
            type="button"
            style={{}}
            className="btn btn-outline-success form-control "
            // onClick={goToSignUp}
          >
            Developers
          </button>
          <button
            type="button"
            style={{}}
            className="btn btn-outline-success form-control mt-5"
            // action={}
          >
            Business
          </button>
          {/* {clicked && <App props={props.children} />} */}
        </div>
      </Form>
    </Fragment>
  );
};

export default OpcionesIniciales;
