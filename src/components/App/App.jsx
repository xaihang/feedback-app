import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
// import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FeelingPage from '../Pages/A-FeelingPage';
import UnderstandingPage from '../Pages/B-UnderstandingPage';
import SupportedPage from '../Pages/C-SupportedPage';
import CommentsPage from '../Pages/D-CommentsPage';
import ReviewPage from '../Pages/E-ReviewPage';
import ThankYouPage from '../Pages/F-ThankYouPage';
import Header from '../Header/Header';



function App() {

  return (
    <div className='App'>
      <Header />
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
        </div>
      </Router>

    </div>
  );
}

export default App;


