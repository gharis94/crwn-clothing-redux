import React,{useState} from 'react';
import {CreateAuthUserWithEmailAndPassword,CreateUserDocFromAuth} from '../../utils/firebase/firebase';

const defaultState={
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
}

const SignUp = () => {
    const [state,setState]=useState(defaultState);
    const {displayName,email,password,confirmPassword}=state;
    
    const handlechange=(e)=>{
        const {name,value}=e.target;

        setState({...state,[name]:value});
    };
    const handlesubmit=async(e)=>{
        e.preventDefault();
        if(password !== confirmPassword){
            alert("Password and Confirm does not match");
            return;
        };

        try{
            const {user} =await CreateAuthUserWithEmailAndPassword(email,password);
            await CreateUserDocFromAuth(user,{displayName});
            
                          
        }catch(error){
            console.log('error',error);
        }

    }
  return (
    <div>
        <form>
            <label>Name</label>
            <input 
                type='text'
                label='Name'
                required
                value={displayName}
                name='displayName'
                onChange={(e)=>handlechange(e)}
            />
            <label>Email</label>
            <input 
                type='email'
                label='Email'
                required
                value={email}
                name='email'
                onChange={(e)=>handlechange(e)}
            />
            <label>Password</label>
            <input 
                type='password'
                label='Password'
                required
                value={password}
                name='password'
                onChange={(e)=>handlechange(e)}
                autoComplete='new-password'
            />
            <label>Confirm Password</label>
            <input 
                type='password'
                label='Confirm Password'
                required
                value={confirmPassword}
                name='confirmPassword'
                onChange={(e)=>handlechange(e)}
                
            />
            <button onClick={(e)=>handlesubmit(e)}>Sign Up</button>
        </form>
    </div>
  )
}

export default SignUp