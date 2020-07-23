import React  from 'react';
import './components.css'
//----------------------------------------------------------------------------------------------
export const Secound = ({P,Q,N,E,D,T,setStep}) => {
    return <>
        <h1 className="title">Secound Step</h1>
        <h2 className="subTitile">Generate Your Public And Private Keys</h2>
        <div className="table-responsive">
        <table className="table table-striped table-dark table-bordered">
            <thead>
                <tr>
                    <th colSpan="4">Private Key</th>
                    <th colSpan="2">Public Key</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th className="subSubTitile">P</th>
                    <th className="subSubTitile">Q</th>
                    <th className="subSubTitile">T</th>
                    <th className="subSubTitile">D</th>
                    <th className="subSubTitile">N</th>
                    <th className="subSubTitile">E</th>
                </tr>
                <tr>
                    <th className="darkBlueColor">{P}</th>
                    <th className="darkBlueColor">{Q}</th>
                    <th className="darkBlueColor">{T}</th>
                    <th className="darkBlueColor">{D}</th>
                    <th className="darkBlueColor">{N}</th>
                    <th className="darkBlueColor">{E}</th>
                </tr>
            </tbody>
        </table>
        </div>
        <button className="btn btn-lg btn-outline-primary  mt-3"
        onClick={e => setStep(3)}>Next Step</button>
    </>
}