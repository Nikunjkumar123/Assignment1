import React from 'react';
import { Routes, Route} from "react-router-dom";
import FormPage from './components/FormPage';
import SecondPage from './components/SecondPage';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<FormPage/>} />
      <Route path="/second" element={<SecondPage/>} />
    </Routes>
  );
};

export default App;

