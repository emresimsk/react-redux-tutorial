import React, { Component } from 'react';
import {Provider} from 'react-redux';
import store from '../store';
import UserAdd from '../componets/UserAdd';
import UserList from '../componets/UserList';
import UserDetail from '../componets/UserDetail';

import 'bootstrap/dist/css/bootstrap.css';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <div className="container-fluid">
              <div className="row">
                  <div className="col-sm-6">
                      <UserAdd/>

                      <br/>
                      <br/>
                      <br/>
                      <br/>
                      
                      <UserDetail/>
                  </div>
                  <div className="col-sm-6">
                      <UserList/>
                  </div>
              </div>
          </div>
      </Provider>
    )
  }
};

export default App;