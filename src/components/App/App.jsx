import React from 'react';
import axios from 'axios';
import './App.css';



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


