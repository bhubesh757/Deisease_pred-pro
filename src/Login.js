import React, { useState } from 'react'

import './Login.css'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import { Button } from 'react-bootstrap';
import { auth, provider } from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes, initialState } from './reducer';

function Login() {
    // onclick events 
    // signIn

    const [user, setUser] = useState(initialState)
    const [{}, dispatch] = useStateValue();
    
    const signIn = () => {
        
        auth.signInWithPopup(provider)
            .then((result) => {
                
                dispatch ({
                    type : actionTypes.SET_USER,
                    user : result.user   //push the user ino the data layer
                })
            })
            .catch((error) => alert(error.message))
    }

  return (
  <div className='login'>
      <div className='login__container'>
          <img src = 'https://cdn5.vectorstock.com/i/1000x1000/58/79/healthcare-hospital-logo-clinic-logo-doctor-logo-vector-29695879.jpg'>
          </img>
          <h1>Sign In to Medicare</h1>
            <p>Diseapredo.com</p>
            <Button onClick = {signIn}> Sign in With Google</Button>
      </div>
  </div>
  )
}

export default Login