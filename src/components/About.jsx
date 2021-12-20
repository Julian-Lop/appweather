import React from "react";
import './About.css'

export default function About(){
    return (
            <div className="contenedorAbout">
                <div className="About">
                    <h3>Info de la página Web del clima</h3>
                    <p>Aplicación que muestra información sobre el clima
                        de ciudades por medio del uso de la Weather Api.
                        <br></br>
                    Se utilizó el lenguaje Javascript con la librería React.
                    El preprocesador less para uso del css, con el objetivo 
                    de implementar responsive a la app web. Se implementa los
                    Hooks de React. Por último, el diseño y las animaciones están
                    basados en el estilo neumorphism.Este tiene como filosofía la
                    simplicidad y suavidad.
                    </p>
                </div>
            </div>
    )
}