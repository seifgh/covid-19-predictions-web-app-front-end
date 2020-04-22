// libraries
import React from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";
// google analytics
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
import { googleTrackingId } from './settings';

// react hooks (state management  )

import { GlobalProvider } from './state-manager/globalState';


// styles
import './App.css';
import './Responsive.css';
import './fontawesome/css/all.css';



// components
import Main  from './components/Main';
import Aside  from './components/Aside'; 

// react routers history
const history = createBrowserHistory()

// google analytics setup
ReactGA.initialize(googleTrackingId);

// page traking whit ga
history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});


function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Router history={history} >
            <Aside />
            <Main />
        </Router>
      </div>
    </GlobalProvider>
  );
}

        // <Footer />

export default App;
