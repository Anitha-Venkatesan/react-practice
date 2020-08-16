import React from "react";
import Time from "./Time";

function Stop(props) {

    return <button onClick={()=>{clearInterval(props.myInterval)}}>Stop</button>;
}
export default Stop;
