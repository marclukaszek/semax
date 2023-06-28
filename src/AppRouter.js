import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Main';
import App from './App';
// import other components and configure additional routes

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/zrb" element={<App />}/>
        {/* Configure other routes for your website */}
      </Routes>
    </Router>
  );
};

export default AppRouter;