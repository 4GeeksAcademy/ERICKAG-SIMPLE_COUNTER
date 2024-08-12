// import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";
import "../styles/index.css";
import Home from "./component/home.jsx";

let seconds = 0;
let minutes = 0;
let hours = 0;
let intevalo = null;

function addSeconds() {
    seconds += 1;

    if (seconds >= 60) {
        seconds = 0;
        minutes += 1;
    }

    if (minutes >= 60) {
        minutes = 0;
        hours += 1;
    }

    renderApp();
}

function start() {
    if (!intevalo) {
        intevalo = setInterval(addSeconds, 1000);
    }
}

function stop() {
    if (intevalo) {
        clearInterval(intevalo);
        intevalo = null;
    }
}

function restart(){
 seconds = 0;
 minutes = 0;
 hours = 0;
 stop()
 renderApp()

}

function resume() {
    if (!intevalo) {
        start(); // Reanuda el temporizador si está detenido.
    }
}

// Función para renderizar la aplicación
function renderApp() {
    ReactDOM.createRoot(document.getElementById('app')).render(
        <Home
            seconds={seconds}
            minutes={minutes}
            hours={hours}
            start={start}
            stop={stop}
            resume={resume}
            restart={restart}
            />
    );
}

renderApp();

