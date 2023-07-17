import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Main';
import App from './App';
import AppPralnia from './AppPralnia';
// import other components and configure additional routes

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/zrb" element={<App />}/>
        <Route path='/pralnia' element={<AppPralnia /> }/>
        {/* Configure other routes for your website */}
      </Routes>
    </Router>
  );
};

export default AppRouter;