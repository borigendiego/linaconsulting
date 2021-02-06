import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
//Components
import Header from './components/header';
import Services from './components/services';
import Banner from './components/banner';
import DeliveryConsulting from './components/deliveryConsulting';
import Approach from './components/approach';
import Contact from './components/contact';
import About from './components/about';
import Consultation from './components/common/Consultation';
import ContactP from './components/conctactPage';


function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route exact path={'/'}>
                    <Header />
                    <Banner />
                    <Services />
                    <DeliveryConsulting />
                    <Approach />
                    <Contact />
                </Route>
                <Route path={'/about'}>
                    <Header />
                    <About />
                </Route>
                <Route path={'/contact'}>
                    <Header />
                    <ContactP />
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
