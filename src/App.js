import React from 'react'
import './index.css';
import { Provider } from 'react-redux';
import appStore from './components/store/appStore';
import AppLayout from './components/AppLayout';

const App = () => {
  return (
    <Provider store={appStore}>
       <h1 className="">
      <AppLayout/>
    </h1>
    </Provider>
   
  )
}

export default App