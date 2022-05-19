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

  const Equal = (viewScreen) => {
    
    var input = viewScreen.toString();
    var sign, result;
    

    if(input.includes("+")){
      sign = "+"
    }
    else if(input.includes("-")){
      sign = "-"
    }
    else if(input.includes("*")){
      sign = "*"
    }
    else if(input.includes("/")){
      sign = "/"
    }

    var equation = input.split("+" || "-" || "*" || "/")
    
    const equLen = equation.length;
    
    if(equLen > "2"){
      alert(`Too many operatore, Please enter only 
      two variables seperated by one operator.`)
    }

    if(sign === '+'){
      result = Number(equation[0]) + Number(equation[1]);
    }
    else if(sign === '-'){
      result = Number(equation[0]) - Number(equation[1]);
    }
    else if(sign === '*'){
      result = Number(equation[0]) * Number(equation[1]);
    }
    else if(sign === '/'){
      result = Number(equation[0]) / Number(equation[1]);
    }

    setview(result)
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
        <div className="buttons" onClick={() => {if(view === 0){setview("1")} else{setview(view+"1")}}} value='1'>1</div>
        <div className="buttons"onClick={() => {if(view === 0){setview("2")} else{setview(view+"2")}}} value='2'>2</div>
        <div className="buttons" onClick={() => {if(view === 0){setview("3")} else{setview(view+"3")}}} value='3'>3</div>
        <div className="buttons" onClick={() => {if(view === 0){setview("4")} else{setview(view+"4")}}} value='4'>4</div>
        <div className="buttons" onClick={() => {if(view === 0){setview("5")} else{setview(view+"5")}}} value='5'>5</div>
        <div className="buttons" onClick={() => {if(view === 0){setview("6")} else{setview(view+"6")}}} value='6'>6</div>
        <div className="buttons" onClick={() => {if(view === 0){setview("7")} else{setview(view+"7")}}} value='7'>7</div>
        <div className="buttons" onClick={() => {if(view === 0){setview("8")} else{setview(view+"8")}}} value='8'>8</div>
        <div className="buttons" onClick={() => {if(view === 0){setview("9")} else{setview(view+"9")}}} value='9'>9</div>
        <div className="buttons" onClick={() => {if(view === 0){setview("0")} else{setview(view+"0")}}} id="zero" value='0'>0</div>
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
