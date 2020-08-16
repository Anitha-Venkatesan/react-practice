import React , {useEffect}from "react";
function Always() {
useEffect (() => {

    console.log("Always - I inserted into DOM");

    return () => {
        console.log("Always - Removed");
    };

},[])


    return (
        <div>
            I am always be here
        </div>
    );
}

export default Always;