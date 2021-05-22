import React from 'react';
//Components
import Header from '../components/header';
import Services from '../components/services';
import Banner from '../components/banner';
import DeliveryConsulting from '../components/deliveryConsulting';
import Approach from '../components/approach';
import Contact from '../components/contact';
import CaseOfStudies from '../components/caseOfStudies';

function App() {
    return (
        <div className="App">
            <Header />
            <Banner />
            <Services />
            <DeliveryConsulting />
            <Approach />
            <CaseOfStudies />
            <Contact />
        </div>
    );
}

export default App;