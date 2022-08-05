import React from 'react';

const PreFooter = () => {
  return (
    <div className='preFooter'>
      <div>Téléchargez l&apos;app sixt</div>
      <div>
        <button>
          <span className='ico-apple-logo'></span>
        </button>
        <button>
          <span className='ico-google-logo'></span>
        </button>
      </div>
      <div>Suivez-nous</div>
      <div>
        <ul>
          <li>
            <span className='ico-fb-logo'></span>
          </li>
          <li>
            <span className='ico-twitter-logo'></span>
          </li>
          <li>
            <span className='ico-instagram-logo'></span>
          </li>
          <li>
            <span className='ico-youtube-logo'></span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PreFooter;
