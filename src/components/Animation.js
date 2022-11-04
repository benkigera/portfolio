import React from "react";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../animations/groovyWalk.json";

function Anim() {
    const mainStyle = {
        height: "50px",
        width: "50px",
        position: "relative",
        bottom: "5px",
        display: "flex",
        
    };
    return (

        <div style={mainStyle}>
            <Lottie animationData={groovyWalkAnimation} loop={true} />
        </div>

    );
};
export default Anim;