import React from "react";


function Sad(){
    React.useEffect (() => {

        console.log("Sad - I inserted into DOM");

        return () => {
            console.log("Sad - Removed");
        };
    
    },[])
    return (
        <div>
            I am Sad
        </div>
    );

}
export default Sad;