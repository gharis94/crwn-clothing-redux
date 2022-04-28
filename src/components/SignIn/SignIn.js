import React,{useState} from 'react'
import {GooglePopup,SignAuthUserWithEmailAndPassword} from '../../utils/firebase/firebase';

const defaultState ={
    email:'',
    password:''
}
const SignIn = () => {
    const [state,setState] = useState(defaultState)
    const {email,password}=state;
    
    const handlesubmit=async(e)=>{
        e.preventDefault();
        try{
            const {user} = await SignAuthUserWithEmailAndPassword(email,password);
            console.log(user)
        }catch(error){
            console.log('error :',error)
        }
    };
    const google =async()=>{
        GooglePopup();
    }
    
    const handlechange=(e)=>{
        
        const {name,value} = e.target
        setState({...state,[name]:value})
    };

  return (
    <div>
        <form onSubmit={(e)=>handlesubmit(e)}>
            <label>Email</label>
            <input
                required 
                type='email'
                value={email}
                onChange={(e)=>handlechange(e)}
                name='email'
                label="Email"
            />
            <label>Password</label>
            <input
                required
                type='password'
                value={password}
                onChange={(e)=>onchange(e)}
                name='password'
                label='Password'
                autoComplete='current-password'
            />
            <button type='submit'>Sign In</button>

        </form>
        <button onClick={()=>google()}>Google Sign In</button>
    </div>
  )
}

export default SignIn