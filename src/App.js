import {v4 as uuidv4} from 'uuid';
import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const addFeedback = (newFeedback) => {
      newFeedback.id = uuidv4();
      setFeedback([newFeedback, ...feedback]);
  }

  const deleteFeedback = (id) => {
    if(window.confirm("Are you sure you want to delete this item?")) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  };

  return (        
    <Router>
      <Routes>
        <Route exact path='/' element={
          <>
            <Header />
            <div className="container">
              <FeedbackForm handleAdd={addFeedback} />
              <FeedbackStats feedback={feedback} />
              <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
            </div>
          </>
        }>        
        </Route>
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </Router>    
  );
}

export default App;
