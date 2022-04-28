import React, { useEffect } from 'react';
import './App.css';
import HomePage from './route/HomePage/HomePage';
import Navbar from './route/Navbar/Navbar';
import {Routes,Route} from 'react-router-dom';
import ShopPage from './route/ShopPage/ShopPage';
import AuthPage from './route/AuthPage/AuthPage';
import {
  onAuthStateChanedListner,
  CreateUserDocFromAuth
} from './utils/firebase/firebase';
import { setCurrentUser } from './store/user/userAction';
import {useDispatch} from 'react-redux';
import { fetchCategoriesAsync } from './store/categories/categoriesAction';
import CheckOutPage from './route/CheckoutPage/CheckOutPage';

function App() {
  const dispatch = useDispatch();
  const dispatch2 =useDispatch();

  useEffect(()=>{
    const unsubscribe = onAuthStateChanedListner((user)=>{
      if(user){
        console.log('sending')
        CreateUserDocFromAuth(user)
      };
      dispatch(setCurrentUser(user));
    })
    return unsubscribe;
  },[]);

  useEffect(()=>{
    dispatch2(fetchCategoriesAsync)
  
  },[])
  

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navbar/>}>
          <Route index element={<HomePage/>}/>
          <Route path='shop/*' element={<ShopPage/>}/>
          <Route path='auth' element={<AuthPage/>}/>
          <Route path='checkout' element={<CheckOutPage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
