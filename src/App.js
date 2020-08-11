import React from 'react';

import { Switch, Route } from 'react-router-dom';

import './App.css';

//
import HomePage from './Pages/homepage/homepage.component';
import ShopPage from './Pages/shop/shop.component';
import SignInAndSignUpPage from './Pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './Components/header/header.component';
import { auth } from './firebase/firebase.utils';



class App extends React.Component{
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }
  
  // Close subcription when auth.onAuthStateChanged
  // unmounts in order to prevent memory leaks
  unsubscribeFromAuth = null;
  
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user
      });
      
      console.log(user);
    });
  }
  
  //
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  
  render() {
    return (
      <div>
      <Header currentUser={this.state.currentUser} />
      <Switch>
      <Route exact path="/" component={HomePage}></Route>
      <Route path="/shop" component={ShopPage}></Route>
      <Route path="/signin" component={SignInAndSignUpPage}></Route>
      </Switch>
      </div>
      );
    }
  }
  
  export default App;
  