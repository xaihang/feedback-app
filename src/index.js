// required for building React app
import React from 'react';

// provides the rendering logic for react app in the browser
import ReactDOM from 'react-dom/client';
import './index.css';

// top-level component for the app
import App from './components/App/App';

// provides the Redux store to the entire React app
import { Provider } from 'react-redux';

// redux store for the app
import store from './Redux/Store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
  {/* wraps the entire App in the Provider component and passes in the store object as a prop */}
    <Provider store={store}>
    {/* renders the App components,
    which contains all of the other components for the app */}
      <App />
    </Provider>


  </React.StrictMode>
);
