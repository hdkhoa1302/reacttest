import React from 'react';
//import logo from './logo.svg';
import './App.css';
import firebase from './Firebase.js';
import { Alert } from 'bootstrap-4-react';
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
  delete = (uid) => {
    const ref = firebase.database().ref('users');
    ref.child(uid).remove()
  };
  render() {
    return (
        <div className="container">
          {this.state.test.map((item)=>
              <div key={item.key}>
                <table className="table table-hover d-xl-table table-sm">
                  <tr className="alert-dismissible">
                    <td className="col">
                      {item.val().name}
                    </td>
                    <td>
                    <button className="btn btn-sm btn-danger" onClick={()=>{this.delete(item.key)}}>x</button>
                    </td>
                  </tr>
                </table>
              </div>
          )}
        </div>
    );
  }
}
export default App