import React, {useEffect} from "react";
import Stop from './Stop';
function Time() {
    const [time, setTime] = React.useState(new Date());
    const [dateInterval, setDateInterval] = React.useState(null);

    useEffect(()=>{
        const interval=setInterval(() => {           
            setTime(new Date());
            }, 1000);

        setDateInterval(interval);
    },[]);
    
    return (
        <div>
            <p>
                Timer :{time.toLocaleString()}
            </p>
            <button onClick={()=>{clearInterval(dateInterval)}}>Stop</button>;
            <Stop/>
        </div>      
    );
}
export default Time;