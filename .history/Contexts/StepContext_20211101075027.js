import React, {useState, createContext} from 'react';

export const StepContext = createContext()

const StepContextProvider = (props) => {
    return (
        <StepContext.Provider value={}>
            {props.children}
        </StepContext.Provider>
    )
}

export default StepContext
