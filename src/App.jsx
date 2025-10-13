import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

// Layout
import Rootlayout from './components/layouts/Rootlayout';

// Pages
import Home from './components/pages/Home';
import About from './components/pages/About';
import Service from './components/pages/Service';
import Myprotfolio from './components/pages/Myprotfolio';
import Contact from './components/pages/Contact';

function App() {
  // যদি count state ব্যবহার না করো, এইটা সরানো ভালো
  // const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Rootlayout />}>
        {/* Nested routes */}
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="service" element={<Service />} />
        <Route path="myprotfolio" element={<Myprotfolio />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      {/* Optional: 404 Page */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}

export default App;
