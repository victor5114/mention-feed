import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-widgets/lib/scss/react-widgets.scss';

import React from 'react';

// Containers. Statefull (Contains some logic)

// Components. Stateless (No logic contained)
import Footer from './footer';

// Custom css
import '../../index.scss';

const App = () =>
  <div>
    <div className="container">
      <div className="container-fluid">
        <div className="page-header">
          <h1>Bouncing Balls Project</h1>
        </div>
      </div>
    </div>
    <Footer />
  </div>;

export default App;
