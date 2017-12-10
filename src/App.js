import React from 'react';
import{
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

//components
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homepage';
import Products from './components/pages/products';
import Contact from './components/pages/contact';

//custom-includes
import './Assets/css/default.min.css';

class App extends React.Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Header/>

          <Route exact path='/' component={Homepage}/>
          <Route exact path='/Products' component={Products}/>
          <Route exact path='/Contact' component={Contact}/>

        <Footer/>
      </div>
    </Router>
    );
  }
}

export default App;
