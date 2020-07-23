import React , {useState,useEffect,useRef}  from 'react';
import {encrypt} from '../logic/API'
import './components.css'
//----------------------------------------------------------------------------------------------
export const Third = ({setStep}) => {
    //----------------------------------------------------------------------------------------------
    const [displayError,setDisplayError] = useState(false)
    const [errorMessage,setErrorMessage] = useState()
    const [displayResult,setDisplayResult] = useState(false)
    const [result,setResult] = useState()
    //----------------------------------------------------------------------------------------------
    const inputRef = useRef() 
    //----------------------------------------------------------------------------------------------
    useEffect(() => {
        inputRef.current.focus()
    },[])
    //----------------------------------------------------------------------------------------------
    const encrypteMessage = () => {
        const input = inputRef.current.value
        if(!input){
            setDisplayError(true)
            setErrorMessage("The input field can't be empty")
            return
        }
        for(let i=0;i<input.length;i++){
            const current = input.charCodeAt(i)
            if(current > 122 || (current < 97 && current !== 32)){
                setDisplayError(true)
                setErrorMessage("The message must be only consists of small alphabets")
                return
            }
        }
        setDisplayError(false)
        setResult(encrypt(input).join(','))
        // setResult(encrypt(input))
        setDisplayResult(true)
    }
    //----------------------------------------------------------------------------------------------
    return <div className="p-3">
        <h1 className="title">Third Step</h1>
        {displayResult?
        <>
        <h1 className=" mt-3 subSubTitile">encrypted Message</h1>
        <div className="overflow-auto"><h2 className="mt-3">{result}</h2></div>
        <div className="w-100 text-center mt-3">
           <button className="btn btn-lg btn-outline-primary mr-3"
           onClick={e => {setDisplayResult(false)}}>Encrypt Another Message</button>
        </div>
        </>
        :<>
        <h2 className="subTitile">Encrypt A Message</h2>
        <input type="text" className={displayError?"form-control input-lg mt-3 is-invalid"
        :"form-control input-lg mt-3"} placeholder="Message" 
        ref={inputRef} onKeyDown={e =>(e.key === 'Enter')?encrypteMessage():null}/>
        {displayError?<div className="invalid-feedback">{errorMessage}</div>:null}
        <button className="btn btn-lg btn-success mt-3 container-fluid" type="button"
        onClick={e => encrypteMessage()}>Encrypt</button>
        </>}
    </div>
    //----------------------------------------------------------------------------------------------
}