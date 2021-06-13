import "./App.css";
import FormularioLogin from "./components/FormularioLogin";
import background from "./assets/images/Background.png";
import { Card } from "react-bootstrap";
import GoogleButton from "react-google-button";

function App() {
  return (
    <div className="App">
      <div className="d-md-flex h-md-100 align-items-center">
        <div className="col-md-6 p-0 bg-indigo h-md-100">
          <div className="text-white d-md-flex align-items-center h-100 p-5 text-center justify-content-center">
            <div className="logoarea pt-5 pb-5">
              {/* --- Start of first half --- */}

              <div
                className="img-flex"
                style={{
                  backgroundImage: `url(${background})`,
                  width: "50vw",
                  height: "100vh",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="container h-100">
                  <div className="row align-items-center h-100">
                    <div className="col-6 mx-auto">
                      <div className="">
                        <Card.Body>
                          <blockquote className="">
                            <p>
                              {" "}
                              Nuwe es la plataforma que convierte el desarrollo
                              profesional, la búsqueda de trabajo y las
                              conexiones de personas y empresas en un juego.
                              Haciendo que puedas centrarte en lo que te gusta,
                              programar, diseñar, planear...{" "}
                            </p>
                            <footer className="blockquote-footer">
                              Someone famous in{" "}
                              <cite title="Source Title">Source Title</cite>
                            </footer>
                          </blockquote>
                        </Card.Body>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* --- End of first half ---  */}
            </div>
          </div>
        </div>

        <div className="col-md-6 p-0 bg-white h-md-100 loginarea">
          <div className="d-md-flex align-items-center h-md-100 p-5 justify-content-center">
            {/* --- Start of second half --- */}

            <FormularioLogin />

            {/* --- End of second half ---*/}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
