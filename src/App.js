import React from 'react'
import './index.css';
import Product from './components/Products';
import { Provider } from 'react-redux';
import appStore from './components/store/appStore';

const App = () => {
  return (
    <Provider store={appStore}>
       <h1 className="">
      <Product/>
    </h1>
    </Provider>
   
  )
}

export default App