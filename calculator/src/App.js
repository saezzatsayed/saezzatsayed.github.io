import './App.css'
import Container from './Container'
import BtnContainer from './BtnContainer'
import { useState } from 'react';
import HelpAlert from './Help'



  

const App = () => {

  const [view, setview] = useState("");
    

  const BackSpace = (view) => {
    var stuff  = view.slice(0,-1);
    setview(stuff)
  } 

  const Equal = (view) => {
    setview(eval(view))

  }

  const ClearScreen = () => {
    setview(0)
  }

  const Negative = () => {
    setview(-view)
  }
  

  return(
    <>
    <HelpAlert> </HelpAlert>
      <Container>
      <div className="screen" data-testid="Screen">{ view || "0" }</div>
        <BtnContainer>
        <div className="buttons" onClick={() => {setview(view+1)}} value='1'>1</div>
        <div className="buttons"onClick={() => {setview(view+2)}} value='2'>2</div>
        <div className="buttons" onClick={() => {setview(view+3)}} value='3'>3</div>
        <div className="buttons" onClick={() => {setview(view+4)}} value='4'>4</div>
        <div className="buttons" onClick={() => {setview(view+5)}} value='5'>5</div>
        <div className="buttons" onClick={() => {setview(view+6)}} value='6'>6</div>
        <div className="buttons" onClick={() => {setview(view+7)}} value='7'>7</div>
        <div className="buttons" onClick={() => {setview(view+8)}} value='8'>8</div>
        <div className="buttons" onClick={() => {setview(view+9)}} value='9'>9</div>
        <div className="buttons" onClick={() => {setview(view+0)}} id="zero" value='0'>0</div>
        <div className="buttons" onClick={() => {setview(view+".")}} value='.'>.</div>
        <div className="buttonO" onClick={() => {setview(view+"-")}} value='-'>-</div>
        <div className="buttonO" onClick={() => {setview(view+"+")}} value='+'>+</div>
        <div className="buttonO" onClick={() => {setview(view+"*")}} value='*'>*</div>
        <div className="buttonO" onClick={() => {setview(view+"/")}}value='/'>/</div>
        <div className="buttonEqual" onClick={() => {Equal(view)}} value='='>=</div>
        <div className="buttonC" onClick={Negative}>+/-</div>
        <div className="buttonC"onClick={ClearScreen}>C</div>
        <div className="buttonC"onClick={() => {BackSpace(view)}}>&#8592;</div>
        </BtnContainer>
      </Container>
    </>
  );
}

export default App;
