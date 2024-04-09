import './App.css'
import { useState } from 'react'

function Square() {
  const [value, setValue] = useState(null);
  function clickHandler() {
    setValue('X');
  }
  return <button className="square" onClick={clickHandler}>{ value }</button>
} 
export default function Board() {
  return <>
   <div className="row">
      <Square/>
      <Square/>
      <Square/>
    </div> 
   <div className="row">
      <Square/>
      <Square/>
      <Square/>
    </div> 
   <div className="row">
      <Square/>
      <Square/>
      <Square/>
    </div> 
  </>
}