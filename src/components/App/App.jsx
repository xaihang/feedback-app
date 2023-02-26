// App style sheet
import './App.css';

// used for handling client-side routing in the application
import { BrowserRouter as Router, Route} from "react-router-dom";

// components within App
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

      {/* Router: component to start handling client-side routing in the app */}
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


