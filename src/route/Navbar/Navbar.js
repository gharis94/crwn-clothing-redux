import React from 'react';
import {ReactComponent as Logo} from '../../asset/crown.svg';
import './Navbar.scss';
import CartIcon from '../../components/CartIcon/CartIcon';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import CartDropDown from '../../components/CartDropDown/CartDropDown';
//import { useSelector } from 'react-redux';
import {SignOutUser} from '../../utils/firebase/firebase';
import { useDispatch,useSelector } from 'react-redux';
import { toggleSelector } from '../../store/cart/cartSelector';
import { isCartOpen } from '../../store/cart/cartAction';

const Navbar = () => {
  //const [toggle,setToggle]=useState(false);
  const toggle = useSelector(toggleSelector)
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);
  const setToggle=()=>{
    
    return dispatch(isCartOpen(!toggle))};
  const signout =()=>SignOutUser();
  return (
    <React.Fragment>
      <div className='navigation'>
        <Link to='/'  className='logo-container'>
          <Logo className='logo'/>
        </Link>
        <div className='nav-links-container'>
          <Link to='shop' className='nav-link'>Shop</Link>
          {
            currentUser?(<span className='nav-link' onClick={()=>signout()}>Sign Out</span>):(<Link to='auth' className='nav-link'>Sign IN</Link>)
          }
          
          <div onClick={()=>setToggle()} className='nav-link'>
            <CartIcon  className='nav-link'/>
          </div>            
        </div>
      </div>
      {
        toggle? <CartDropDown/> : null
      }
      <Outlet />
    </React.Fragment>
    
  )
}

export default Navbar