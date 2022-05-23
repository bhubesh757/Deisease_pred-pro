import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './DispredSym.css'

function DispredSym() {

    const [click, setClick] = useState(false);
    const closeMobileMenu = () =>{ 
   
        // toggling the previous state
        setClick((prevState)=>!prevState);
       
    };

  return (
      
    <div><div className="dispred">
    <h5 className="card-header text-center">Disease Prediction</h5>
    <div className="card-body">
      <h5 className="card-title text-center">We predict the following Diseases !</h5>
      <div className="card-deck">
        <div className="card zoom" style={{width: '100%'}}>
          <ul className="list-group list-group-flush">
            <li className="list-group-item text-center ">Malaria</li>
            <li className="list-group-item text-center">Dengue</li>
            <li className="list-group-item text-center">Heart Attack</li>
          </ul>
        </div>
        <div className="card" style={{width: '100%'}}>
          <ul className="list-group list-group-flush">
            <li className="list-group-item text-center">Hypertesion</li>
            <li className="list-group-item text-center">Migraine</li>
            <li className="list-group-item text-center">Cervical spondylosis</li>
          </ul>
        </div>
        <div className="card" style={{width: '100%'}}>
          <ul className="list-group list-group-flush">
            <li className="list-group-item text-center">Paralysis</li>
            <li className="list-group-item text-center">Drug Reaction</li>
            <li className="list-group-item text-center">Alcoholic hepatitis</li>
          </ul>
        </div>
        <div className="card" style={{width: '100%'}}>
          <ul className="list-group list-group-flush">
            <li className="list-group-item text-center">Pneumonia</li>
            <li className="list-group-item text-center align-middle">Dimorphic hemmorhoids(piles)
            </li>
          </ul>
        </div>
      </div>
      {/* <div class="container">
        <div class="row align-items-center">
            <div class="col-4">Malaria</div>
            <div class="col-4">Dengue</div>
            <div class="col-4">Heart Attack</div>
        </div>
        
    </div>  */}
      <br />
      <div className="dispredbutton">
        <Link  to='/sym'  onClick={closeMobileMenu}  className="btn btn-primary btn-lg">Track Your Symptoms
          Now
          </Link>
          
      </div>
    </div>
  </div></div>
  )
}

export default DispredSym