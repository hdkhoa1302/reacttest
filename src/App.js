import React from 'react';
//import logo from './logo.svg';
import './App.css';
import firebase from './Firebase.js';

class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state={
      test: [],
    }
  }
  componentDidMount() {
    const ref = firebase.database().ref('users');
    ref.on('value', (snapshot)=>{
      let test = [];
      snapshot.forEach(item => {
        test.push(item);
      });
      this.setState({
        test:test
      })
    })
  }
  render() {
    return (
        <div>
          {this.state.test.map((item)=>
              <div key={item.key}>
              <ul>
                <li>
                  {item.val().name}
                </li>
              </ul>
              </div>
                )}
        </div>
    );
  }
}
export default App