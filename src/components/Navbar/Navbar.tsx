import React, { useState } from 'react';
import { StyledNavbar } from './navbar.styled';
import NavbarPropsType from './navbar.type';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import Input from '../Input/Input';
import { Search32 } from '@carbon/icons-react';

/**
 * Navigation bar
 * @returns {JSX.Element}
 */
const Navbar: React.FC<NavbarPropsType> = ({ children }: NavbarPropsType): JSX.Element => {
  const [search, setSearch] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(event);
  };

  return (
    <StyledNavbar>
      <Logo />

      <section className="navigation">
        {children}
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
