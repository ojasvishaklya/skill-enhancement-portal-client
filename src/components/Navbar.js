import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { MdClose, MdMenu } from 'react-icons/md';
import { FiSun, FiMoon } from 'react-icons/fi';
import { BsBell } from 'react-icons/bs';
import Logo from '../assets/images/logo.png';

const NavStyles = styled.div`

  width: 100%;
  padding: 1rem 0;
  height: 150px;
  background: var(--primary);
  clip-path: polygon(0 0, 100% 0%, 100% 45%, 0 100%, 0% 50%);  

  ul {
    max-width: 1200px;
    margin: 0;
    width: 90%;
    text-align: center;
    li {
      display: inline-block;
      border-radius: 8px;
      transition: 0.3s ease background-color;
      margin:0 0.8rem;
      &:hover {
        background-color: var(--background-s);
      }
    }
    a {
      display: inline-block;
      font-family: 'RobotoMono Regular';
      padding: 1rem 2rem;
      font-size: 2rem;
      color: var(--text-s);
      outline: none;
    }
    .active {
      width:100%;
      color: var(--text-s);
      background-color: var(--background-s);
      border-radius: 8px;

    }
  }
  .mobile-menu-icon {
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 4rem;
    cursor: pointer;
    display: none;
    outline: none;
    * {
      pointer-events: none;
    }
  }
  .navItems .closeNavIcon {
    display: none;
  }
  .hide-icon{
        display:none;
  }
  .navbar{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    .company{
      img{
        width: 0%;
      }
    }
    .navItems{
    }
  }

  @media only screen and (max-width: 768px) {

    padding: 0;
    background: var(--primary);
    clip-path: polygon(0 0, 100% 0%, 100% 45%, 0 100%, 0% 50%);  
    .hide-item {
      display:none;
    }
    .mobile-menu-icon {
      display: block;
    }
    .navItems {
      --top: 1rem;
      text-align:start;
      position: absolute;
      transition: 0.3s ease transform;
      background-color: var(--background);
      padding: 1rem ;
      width: 50%;
      max-width: 250px;
      border-radius: 12px;
      right: 1rem;
      top: var(--top);
      .closeNavIcon {
        display: block;
        width: 3rem;
        margin: 0 0 0 auto;
        cursor: pointer;
        * {
          pointer-events: none;
        }
      }
      li {
        display: block;
        margin-bottom: 1rem;
      }

    }
  }
`;

export default function Navbar({ toggleTheme, theme }) {
  const [showNav, setShowNav] = useState(false);
  return (
    <NavStyles>
      <div
        className="mobile-menu-icon"
        onClick={() => setShowNav(!showNav)}
        role="button"
        onKeyDown={() => setShowNav(!showNav)}
        tabIndex={0}
      >
        <MdMenu />
      </div>

      <div className="navbar">
        <div className="company">
          <img src={Logo} alt="Skill Enhancement Portal"/>
        </div>
        <ul className={!showNav ? 'navItems hide-item' : 'navItems'}>
          <div
            className="closeNavIcon"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            <MdClose />
          </div>
          <li>
            <NavLink
              to="/"
              exact
              onClick={() => setShowNav(!showNav)}
              role="button"
              onKeyDown={() => setShowNav(!showNav)}
              tabIndex={0}
            >
              Explore
            </NavLink>
          </li>
          <li>
            <div id="spacer">
            </div>
          </li>


          <li>
            <NavLink
              to="/profile"
              onClick={() => setShowNav(!showNav)}
              role="button"
              onKeyDown={() => setShowNav(!showNav)}
              tabIndex={0}
            >
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={() => setShowNav(!showNav)}
              role="button"
              onKeyDown={() => setShowNav(!showNav)}
              tabIndex={0}
            >
              <BsBell fill={theme === 'd' ? "#fff" : "#333"} className="theme-icon" />
            </NavLink>
          </li>
          <li>
            <Link onClick={() => {
              toggleTheme(theme);
              setShowNav(!showNav);
            }}>
              <FiMoon fill="#FFF" className={theme === 'l' ? 'theme-icon' : 'hide-icon'} />
              <FiSun className={theme === 'd' ? 'theme-icon' : 'hide-icon'} />
            </Link>
          </li>
        </ul>
      </div>

    </NavStyles>
  );
}
