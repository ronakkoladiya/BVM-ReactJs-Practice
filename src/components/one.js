import React, { useState, useContext } from  'react';
import {useNavigate} from "react-router-dom";

import MyContext from "./context";
import HigherOrderComp from "./HOC/higherOrderComp";

//count & countHandler are coming from HigherOrderComponent

function One(props){

    const context = useContext(MyContext);
    const navigate = useNavigate();

    const passDataToParent = () => {
        context.dataFromChild(props.count);
    };

    if(props.count > 10){
        throw new Error('Error Boundary Activated...');
    }

    return(
        <>
            <div style={{ margin: '50px',marginBottom: '100px' }}>

                <div className={'forh1'}>
                    <h1>FUNCTIONAL COMPONENT</h1>
                    <a onClick={() => navigate('/classcomp')}>GO TO CLASS COMPONENT</a>
                </div>

                <h4>useContext Data: {context.name}</h4>
                <h3>Counter App using Functional Component w/ HigherOrderComponent : </h3>
                <h2>{props.count}</h2>
                <button
                    onClick={() => {
                        props.countHandler();
                    }}
                >
                    Add!
                </button>

                <button
                    onClick={() => {
                        passDataToParent();
                    }}

                    style={{ marginLeft: '50px' }}
                >
                    PASS PROPS TO PARENT
                </button>

            </div>
        </>
    );
}

export default HigherOrderComp(One);