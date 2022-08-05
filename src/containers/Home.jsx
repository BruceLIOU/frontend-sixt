import './../assets/css/main.scss';

import SearchBar from '../components/Home/SearchBar';
import Hero from '../components/Home/Hero';
import Map from '../components/Home/Map';
import PreFooter from '../components/Home/PreFooter';

const Home = () => {
  return (
    <div className='main'>
      <SearchBar />
      <Hero />
      <Map />
      <PreFooter />
    </div>
  );
};

export default Home;
