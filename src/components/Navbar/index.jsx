import logo from '../../assets/logo.svg';
import CarWidget from '../CarWidget';
import Pill from '../Pill';

const Navbar = () => {
    return(
        <header className="header">
            <nav className="navbar container">
                <figure className="navbar__logo">
                    <img src={logo}  alt="" />
                </figure>
            <menu className="navbar__menu">
                <li className="navbar__item">
                    <a href="" className='navbar__link'>Zapatillas</a>
                    </li>
                <li className="navbar__item">
                    <a href="" className='navbar__link'>Ropa</a>
                    </li>
                <li className="navbar__item">
                    <a href="" className='navbar__link'>Accesorios</a>
                    </li>
                    <li className="navbar__item">
                    <a href="" className='navbar__link'>Login</a>
                    </li>
                <li>
                    <a href="" className='navbar__carrito'>
                        <CarWidget quantity={5} />
                    </a>
                    </li>
            </menu>
        </nav>
    </header>
    );
}

export default Navbar;