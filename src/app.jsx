import './assets/css/app.scss';
import './assets/icons/style.css';
import './assets/fonts/stylesheet.css';

import { Routes, Route } from 'react-router-dom';

import Header from './components/header';
import Footer from './components/Footer';

import Home from './containers/Home';

const App = () => {
  return (
    <div className='container'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
