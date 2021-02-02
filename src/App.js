import React from 'react';
//Components
import Header from './components/header';
import Services from './components/services';
import Banner from './components/banner';
import DeliveryConsulting from './components/deliveryConsulting';
import Approach from './components/approach';


function App() {
  return (
    <div className="App">
        <Header />
        <Banner />
        <Services />
        <DeliveryConsulting />
        <Approach />
    </div>
  );
}

export default App;
