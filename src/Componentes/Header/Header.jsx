import React from "react";
import Typical from "react-typical"

export default function Header() {
  return (
    <div className="porfolio-container">
      <div className="porfolio-parent">
      
        <div className="porfolio-detalles">
          <div className="redes">
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="#">
              <i className="fa fa-instagram"></i>
            </a>
          </div>
          <div className="profile-details-name">
              <span className="primary-text">
                  {" "}
                 Hola, mi nombre es <span className="resaltada">Pedro</span>
              </span>
          </div>
          <div className="profile-details-role">
                <span className="primary-text">
                    {" "}
                    <h1>
                        {" "}
                        <Typical loop={Infinity}
                        steps={[
                            "Mis habilidades",
                            1000,
                            "Mis proyectos",
                            1000,
                            "Mis conocimientos",
                            1000,
                            "Front End",
                            1000,
                        ]}/>
                    </h1>
                    <span className="profile-role-tagline"> 
                        Habilidad para crear aplicaciones. Front End.
                    </span>
                </span>
          </div>
          <div className="profile-options">
              <button className="btn primay-btn">
                  {" "}
                  Contratame{" "}
              </button>
              <a href="DNI pedro.pdf" download="Curriculum">
                  <button className="btn resaltado-btn">Descargar Cv</button>
              </a>
          </div>
        </div>
      </div>
    </div>
  );
}
