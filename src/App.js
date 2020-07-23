//----------------------------------------------------------------------------------------------
import React , {useState,useEffect} from 'react';
//----------------------------------------------------------------------------------------------
import {getAll} from './logic/API'
//----------------------------------------------------------------------------------------------
import {First} from './components/first'
import {Secound} from './components/secound'
import {Third} from './components/third'
 //----------------------------------------------------------------------------------------------
import './App.css';
import img from './images/security.png'
//----------------------------------------------------------------------------------------------
export const App = () => {
const [step,setStep] = useState(1)
const [P,setP] = useState()
const [Q,setQ] = useState()
const [N,setN] = useState()
const [T,setT] = useState()
const [E,setE] = useState()
const [D,setD] = useState()
//----------------------------------------------------------------------------------------------
useEffect(() => {
  const {p,q,n,t,e,d} = getAll()
  setP(p)
  setQ(q)
  setN(n)
  setT(t)
  setE(e)
  setD(d)
},[])
//----------------------------------------------------------------------------------------------
const getStep = () => {
  switch(step){
    case 1: return <First P = {P} Q = {Q} setStep = {setStep}/>
    case 2: return <Secound P = {P} Q = {Q} N = {N} T = {T} E = {E} D = {D} setStep = {setStep}/>;
    case 3: return  <Third setStep = {setStep}/>
    default: console.log("Error !!")
  }
}
//----------------------------------------------------------------------------------------------
return<>
  <div className="row mainDiv m-md-3 p-md-3">
    <div className="col-md-3">
      <h2 className="font-weight-bold" style={{color:'rgb(0, 177, 148)'}}>RSA</h2>
      <img src={img} alt="Security"/>
    </div>
    <div className="col-md text-center">{getStep()}</div>
    <div className="m-2">
      <a href="https://github.com/Shapasy/rsa_implementation_web_application" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github fa-5x hub"></i>
      </a>
    </div>
  </div>
  </>
}
//----------------------------------------------------------------------------------------------
