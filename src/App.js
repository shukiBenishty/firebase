import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';
import Example from './dataGrid.js';
import 'bootstrap/dist/css/bootstrap.css';
import { makeData, Logo, Tips } from "./Utils.js";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCtcQPICb-VcWgOsY6wVIn3JcaM2g6F11w",
  authDomain: "mt-first-project1.firebaseapp.com",
  databaseURL: "https://mt-first-project1.firebaseio.com",
  projectId: "mt-first-project1",
  storageBucket: "mt-first-project1.appspot.com",
  messagingSenderId: "101730913403"
};
firebase.initializeApp(config);


const range = len => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

// Object.keys(obj).length

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      arry: makeData()
    }
  }


  writeUserData(studentId, firstName, lastName, address) {
    firebase.database().ref('students/' + studentId).set({
      lastName: lastName,
      firstName: firstName,
      address : address
    });
  }
  add = {
  city: "ashdod",
  street: "milman"
};

// makeData(len = 1) {
//   return range(len).map(d => {
//     return {
//       ...this.state.student,
//       children: range(10).map(newPerson)
//     };
//   });
// }


  componentDidMount(){
    this.writeUserData("200360303", "shuki", "benishty", this.add)
    var starCountRef = firebase.database().ref('students/' + "200360303");

    console.log(this.state.arry);
    const arr = this.state.arry
    starCountRef.on('value', snapshot => {
        this.setState({
            arry: arr.push(snapshot.val())
        });
        console.log(Object.values(snapshot.val()))
    });
    // const rootRef = firebase.database().ref().child('shui');
    // const a = rootRef.child('a');
    // a.on('value', snap =>{
    //   this.setState({
    //     name: snap.val()
    //   });
    // })
  };

  render() {
    return (
      <div className="App">
        <Example data={this.state.arry}/>
      </div>
    );
  }
}

export default App;
