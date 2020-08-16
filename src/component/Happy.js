import React from "react";


function Happy(){
    React.useEffect (() => {

        console.log("Happy - I inserted into DOM");

        return () => {
            console.log("Happ - Removed");
        };
    
    },[])
    return (
        <div>
            I am happy
        </div>
    );

}
export default Happy;