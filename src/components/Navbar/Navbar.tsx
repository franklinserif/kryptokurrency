import React, { useState } from 'react';
import { StyledNavbar } from './navbar.styled';
import NavbarPropsType from './navbar.type';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import Input from '../Input/Input';
import { Search32 } from '@carbon/icons-react';
import HamburgerButton from '../Hamburgerbutton/HamburgerButton';

/**
 * Navigation bar
 * @returns {JSX.Element}
 */
const Navbar: React.FC<NavbarPropsType> = ({ children }: NavbarPropsType): JSX.Element => {
  const [search, setSearch] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(event);
  };

  const showMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  return (
    <StyledNavbar>
      <section className="logo-container">
        <Logo />
        <HamburgerButton handleClick={() => showMenu()} />
      </section>

      <section className={`navigation ${isMenuOpen ? 'navigation--active' : ''}`}>
        <ul className="navigation-menu">{children}</ul>
        <section className="navigation-options">
          <Input
            type="search"
            variant="lg"
            placeholder="search"
            light={true}
            value={search}
            handleChange={handleChange}
          >
            <Search32 aria-label="search" className="input-icon" />
          </Input>
          <Button variant="primary-button">Settings</Button>
        </section>
      </section>
    </StyledNavbar>
  );
};

export default Navbar;
