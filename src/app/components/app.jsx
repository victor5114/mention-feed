import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-widgets/lib/scss/react-widgets.scss';

import React, { PropTypes } from 'react';
// Containers. Statefull (Contains some logic)

// Components. Stateless (No logic contained)
import Footer from './footer';
import Header from './header';

// Custom css
import '../../index.scss';

const App = (props) =>
  <div>
    <div className="container">
      <div className="container-fluid">
        <Header pathname={props.location.pathname} />
        {props.children}
      </div>
    </div>
    <Footer />
  </div>;

App.propTypes = {
  children: PropTypes.object,
  location: PropTypes.object,
};

export default App;
