import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';  
import QuizList from './components/QuizList';
import QuizPage from './components/QuizPage';
import ScorePage from './components/ScorePage';

function App() {
  return (
    <Router>
      <div className="container">
        <h1 className="my-4 text-center text-primary">Quiz Application</h1>
        <Routes>
          <Route exact path="/" component={QuizList} />
          <Route path="/quiz/:id" component={QuizPage} />
          <Route path="/score" component={ScorePage} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
