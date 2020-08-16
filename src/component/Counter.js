import React,{useState} from 'react';
import Happy from "./Happy";
import Sad from "./Sad";
import Always from "./Always";

function Counter() {
    const[count,setCount] = useState(0);
    
    return (
    <div>
        <p>{count}</p>
        <button onClick={()=>{
            if(count>=0) {
                setCount(count+1)
            }
        }}>Increment</button>

        <button onClick={()=>{
            if(count>=1) {
                setCount(count-1)
            }
        }}>Decrement</button>

        {count === 10 && <Happy />}
        {count === 0 && <Sad />}
        {<Always/> }
    </div>
    );


}

export default Counter;