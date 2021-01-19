import React from 'react';
//Components
import Header from './components/header';
import Services from './components/services';
import Banner from './components/banner';
import DeliveryConsulting from './components/deliveryConsulting';


function App() {
  return (
    <div className="App">
        <Header />
        <Banner />
        <Services />
        <DeliveryConsulting />
    </div>
  );
}

export default App;
