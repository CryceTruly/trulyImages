import React, { Component } from 'react';
import firebase,{firebaseui} from "../firebase/config";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import Photos from './Photos';

export default class Home extends Component {


  state = {
    isLoggedIn: false
  };



  // Listen to the Firebase Auth state and set the local state.
  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
        (user) => this.setState({isLoggedIn: !!user})
    );
  }

  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  render() {
    if (!this.state.isLoggedIn) {
      return (
        <StyledFirebaseAuth uiConfig={firebaseui} firebaseAuth={firebase.auth()}/>
      );
    }
    localStorage.setItem("user_id",firebase.auth().currentUser.uid)
    return (
        <Photos/>

    );
  }

}
