import React, {useState, createContext} from 'react';

export const StepContext = createContext()

const StepContextProvider = (props) => {
    const [steps, setSteps] = useState(1);

    const front = () => {
        setSteps(steps + 1)
    }

    const back = () => {
        setSteps(steps - 1)
    }
    return (
        <StepContext.Provider value={{steps, front, back}}>
            {props.children}
        </StepContext.Provider>
    )
}

export default StepContextProvider;
