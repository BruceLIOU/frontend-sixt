import { Carousel } from 'react-carousel-minimal';

import Image1 from '../../assets/img/carousel/cfc9edb1-3e28-4ecd-8de5-21425d7d29ce.jpeg';
import Image2 from '../../assets/img/carousel/391cd6c1-8042-4ada-bfbf-6da86c8e5527.jpeg';
import Image3 from '../../assets/img/carousel/49dbc80f-3566-46f9-b294-b2fddb2fe8ae.jpeg';

const Hero = () => {
  const data = [
    {
      image: Image1,
      caption: 'Abonnez-vous maintenant',
    },
    {
      image: Image2,
      caption: 'Abonnez-vous maintenant',
    },
    {
      image: Image3,
      caption: 'Abonnez-vous maintenant',
    },
  ];

  const captionStyle = {
    fontSize: '1.75em',
    fontWeight: 'bold',
    bottom: '80px',
    backgroundColor: 'white',
    width: 'fit-content',
    padding: '1rem',
    color: '#ff5f00',
    textShadow: 'none',
    right: '3.5rem',
    cursor: 'pointer',
    textTransform: 'uppercase',
  };

  return (
    <div className='hero'>
      <Carousel
        data={data}
        time={4000}
        width='100%'
        height='auto'
        slideNumber={false}
        automatic={true}
        dots={true}
        pauseIconColor='white'
        pauseIconSize='40px'
        slideBackgroundColor='darkgrey'
        slideImageFit='cover'
        thumbnails={false}
        captionStyle={captionStyle}
        style={{
          textAlign: 'center',
          maxWidth: '100%',
          margin: '40px auto',
        }}
      />
    </div>
  );
};

export default Hero;
