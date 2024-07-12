import { useState } from 'react';

function ButtonValue(){
    const [index, setIndex] = useState(0);
    function AddValue(){
        setIndex(index + 1);
    }
    return(
    <>
    <button onClick={AddValue}>Next</button>
    </>
    );
}
export default ButtonValue;