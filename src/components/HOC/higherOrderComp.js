import React, { useState } from  'react';
import useTitleCounter from "../customhooks/useTitleCounter";

function HigherOrderComp(NormalComp){

    function NewComp(){
        const [count, setCount] = useState(0);

        const countHandler = () => {
            setCount(count + 1);
        };

        //custom hook
        useTitleCounter(count);

        return(
            <NormalComp count={count} countHandler={countHandler} />
        );
    }

    return NewComp;
}

export default HigherOrderComp;