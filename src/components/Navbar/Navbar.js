import './Navbar.css';
import Title from './Title.png';
import Discord from './Discord.svg';

function Navbar() {
    

    return(
        <>
        <header className='navbar'>
        <div className='navbar__item'>
            <img src={Discord} alt='Discord'  />    
        </div>  
        <div className='navbar__title navbar__item'>
            <img src={Title} alt='MedSight' height="36" width="306" />
        </div>
        <div className='navbar__item'>About</div>

    </header>
        </>
    );
}

export default Navbar;