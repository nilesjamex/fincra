import React, {useState, useContext} from 'react'
import { StepContext } from './../Contexts/StepContext';

const Pay = () => {

   const {steps, front, back} = useContext(StepContext)

    switch (steps) {
        case 1:
            return (
        <div>
        <p onClick={(e) => front}> hello </p>
        </div>
    );
     case 2:
            return (
        <div>

        </div>
    );
     case 3:
            return (
        <div>

        </div>
    );
     case 4:
            return (
        <div>

        </div>
    );
    }
    
}

export default Pay;

