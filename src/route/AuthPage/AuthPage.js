import React from 'react'
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';

const AuthPage = () => {
  return (
    <div>
        <h4>Auth Page</h4>
        <SignIn/>
        <SignUp/>
    </div>
  )
}

export default AuthPage