import logo from '../assets/img/sixt-logo_cuocws.png';
import './../assets/css/header.scss';

const Header = () => {
  return (
    <div className='header'>
      <nav>
        <div className='left'>
          <img src={logo} alt='Logo SIXT' />
          <ul>
            <li className='linkActive'>Rent</li>
            <li>Share</li>
            <li>Ride</li>
            <li>
              Sixt+<span className='sixtPlus'>Abonnement auto</span>
            </li>
          </ul>
        </div>
        <div className='right'>
          <span className='ico-planet'></span>
          <span>Backoffice</span>
        </div>
      </nav>
    </div>
  );
};

export default Header;
