import React from 'react';
import './App.css';
import Child from './child';
import {Transactionprovider} from './transcontext';

function App() {
  return (
    <Transactionprovider>
      
      <Child></Child>
    </Transactionprovider>
  );
}

export default App;
