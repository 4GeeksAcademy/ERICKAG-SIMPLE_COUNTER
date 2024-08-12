import React from "react";

// Include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

// Create your first component
const Home = ({ seconds, minutes, hours, stop, resume, start, restart }) => {
    return (
        <div className="container text-center vh-100 d-flex flex-column justify-content-center align-items-center">
            <div className="d-flex bg-dark text-white p-4 rounded shadow-lg">
                <div className="fs-1 mx-2">
                    {hours < 10 ? `0${hours}` : hours}:
                </div>
                <div className="fs-1 mx-2">
                    {minutes < 10 ? `0${minutes}` : minutes}:
                </div>
                <div className="fs-1 mx-2">
                    {seconds < 10 ? `0${seconds}` : seconds}
                </div>
            </div>

            <div className="mt-4">
                
                <button className="btn btn-primary mx-2" onClick={start}>Start</button>
                <button className="btn btn-primary mx-2" onClick={stop}>Stop</button>
                <button className="btn btn-primary mx-2" onClick={resume}>Resume</button>
                <button className="btn btn-primary mx-2" onClick={restart}>Restart</button>
            </div>
        </div>
    );
};

export default Home;
