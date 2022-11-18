import React from 'react'
import './MobileNav.css';
import Logo from '../../assets/logo.png';
import Hamburger from '../../assets/hamburger.png';
import ArrowDown from '../../assets/arrow-down.png';
import ClientImg from '../../assets/Ellipse 125.png';

const MobileNav = () => {
  return (
    <>
        <div className='mobile_nav'>
            <nav className='nav-fluid'>
                <div className='tick-logo'>
                    <img src={Logo} alt='logo' />
                </div>
                <a href='/'>
                    <img src={Hamburger} alt='menu' />
                </a>
            </nav>
            <header className='heading'>
                <h5><span className='thick-border'>New T</span>ask</h5>
            </header>
        </div>

        <div className='topBar_destp'>
            <header className='heading'>
                <h5><span className='thick-border'>New T</span>ask</h5>
            </header>
            <div className='client__profile'>
                <img src={ClientImg} alt='' />
                <p>Joseph A.</p>
                <img src={ArrowDown} alt='dropdown menu' />
            </div>
        </div>
    </>
  )
}

export default MobileNav