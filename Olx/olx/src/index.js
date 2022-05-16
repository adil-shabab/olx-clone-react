import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {FirebaseContext} from './store/FirebaseContext'
import firebase from './Firebase/config'

ReactDOM.render(
<FirebaseContext.Provider value={{firebase}}>
<App/>
</FirebaseContext.Provider>
,document.getElementById('root'))


