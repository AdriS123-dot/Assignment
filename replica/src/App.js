import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import EditPage from './pages/EditPage';
import ViewPage from './pages/ViewPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/view/:id" element={<ViewPage />} />
      <Route path="/edit/:id" element={<EditPage />} />
    </Routes>
  );
}
