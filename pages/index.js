import React from 'react';
//Styles
import '../css/globalStyles.scss';
//Components
import Header from '../components/header';
import Services from '../components/services';
import Banner from '../components/banner';
import DeliveryConsulting from '../components/deliveryConsulting';
import Approach from '../components/approach';
import Contact from '../components/contact';
//import Consultation from './components/common/Consultation';
import ContactP from '../components/conctactPage';
import CaseOfStudies from '../components/caseOfStudies';

function App() {
    return (
        <div className="App">
           {/* HOME*/}
                        <Header />
                        <Banner />
                        <Services />
                        <DeliveryConsulting />
                        <Approach />
                        <CaseOfStudies />
                        <Contact />


        {/* Contact*/}
                        <Header disableSticky />
                        <ContactP />
        </div>
    );
}

export default App;