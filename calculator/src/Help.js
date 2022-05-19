import React from 'react'
import './Help.css'

const HelpAlert = () =>{
    
    return <button data-testid="HelpBtn" className="Help" onClick={ () =>{alert(`
    This is a Simple calculator application.
    The application does simple math operations.
    How to..? 
    to use the application simply click on the numbers needed to be 
    calculated, with the operator in between then press the "=" 
    button.
    to add a negative number simply enter the number and press 
    the "+/-" button.
    use the <- button for backspace and C to erase everything.`)}}>
        ?
    </button>;
};

export default HelpAlert;