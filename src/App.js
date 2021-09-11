import React , {useState} from 'react'
import './App.css'

const App = () => {
  const [input,setInput] = useState("");
  const [result,setresult] = useState(0);
  const changeHandler = e=>{
    setInput(e.target.value);
  }
  return (
    <div>
      <center><h1>Calculator</h1>
      <input type="text" name="input" value={input} onChange={changeHandler}/> <br />
      <button onClick={()=>setresult(eval(input))}>Result</button>
      <h2>result is : {result}</h2>

        <button onClick={()=>setInput(input+'1')}>1</button>
        <button onClick={()=>setInput(input+'2')}>2</button>
        <button onClick={()=>setInput(input+'3')}>3</button>
        <button onClick={()=>setInput(input+'4')}>4</button>
        <button onClick={()=>setInput(input+'5')}>5</button> <br />

        <button onClick={()=>setInput(input+'6')}>6</button>
        <button onClick={()=>setInput(input+'7')}>7</button>
        <button onClick={()=>setInput(input+'8')}>8</button> 
        <button onClick={()=>setInput(input+'9')}>9</button>
        <button onClick={()=>setInput(input+'0')}>0</button><br />

        <button onClick={()=>setInput(input+'+')}>+</button>
        <button onClick={()=>setInput(input+'-')}>-</button> 
           <button onClick={()=>setInput(input+'/')}>/</button>
              <button onClick={()=>setInput(input+'*')}>*</button>
                 <button onClick={()=>setInput('')}>CLR</button><br />

        
      </center>
    </div>
  )
}

export default App
