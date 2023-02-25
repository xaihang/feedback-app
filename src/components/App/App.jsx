import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
// import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FeelingPage from '../Pages/FeelingPage';
import UnderstandingPage from '../Pages/UnderstandingPage';
import SupportedPage from '../Pages/SupportedPage';
import CommentsPage from '../Pages/CommentsPage';
import ReviewPage from '../Pages/ReviewPage';
import ThankYouPage from '../Pages/ThankYouPage';
import Admin from '../Pages/Admin';



function App() {

  const [feedback, setFeedback] = useState({})



  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

      <Router>
        <div>
          <Route exact path="/">
            <FeelingPage />
          </Route>
          <Route exact path="/understanding">
            <UnderstandingPage />
          </Route>
          <Route exact path="/supported">
            <SupportedPage />
          </Route>
          <Route exact path="/comments">
            <CommentsPage />
          </Route>
          <Route exact path="/review">
            <ReviewPage />
          </Route>
          <Route exact path="/thankyou">
            <ThankYouPage />
          </Route>
          <Route exact path="/admin">
            <Admin />
          </Route>
        </div>
      </Router>

    </div>
  );
}

export default App;


