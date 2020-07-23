import React  from 'react';
import './components.css'
//----------------------------------------------------------------------------------------------
export const First = ({P,Q,setStep}) => {
    return <>
        <h1 className="title">First Step</h1>
        <h2 className="subTitile">Generate Two Random Prime Number P And Q</h2>
        <h3><span className="subSubTitile">P : </span>{P}</h3>
        <h3><span className="subSubTitile">Q : </span>{Q}</h3>
        <button className="btn btn-lg btn-outline-primary  mt-3"
        onClick={e => setStep(2)}>Next Step</button>
    </>
}