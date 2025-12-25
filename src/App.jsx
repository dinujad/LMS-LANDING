import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Topics from './pages/Topics';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/topics" element={<Topics />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
