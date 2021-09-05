import styled, { css } from "styled-components";

import {
  AiOutlineHome,
  AiOutlineContacts,
  AiOutlineInfoCircle
} from "react-icons/ai";

import { BiSun } from "react-icons/bi"

export const Container = styled.div`
  .navbar {
    position: fixed;
    background-color: var(--primary);
    transition: 200ms;
  }

  .navbar-nav {
    list-style-type: none;
    padding: 0; 
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
  }

  .nav-item {
    width: 100%;
  }

  .nav-item:last-child {
    margin-top: auto;
  }

  .nav-link {
    display: flex;
    align-items: center;
    height: 5rem;
    color: black;
    text-decoration: none;
  }

  .nav-link:hover {
    background-color: rgb(231, 117, 117);
  }

  .link-text {
    display: none;
    margin-left: 1rem;
  }

  .nav-link .menu-icon {
    margin: 0 1.5rem;
  }

  #dark-mode {
    cursor: pointer;
  }

  /* Small screen */
  @media only screen and (max-width: 600px) {
    .navbar {
      bottom: 0;
      width: 100vw;
      height: 5rem;
    }

    .navbar-nav {
      flex-direction: row;
    }
  
    .nav-link {
      justify-content: center;
    }
  }

  /* Large screens */
  @media only screen and (min-width: 600px) {
    .navbar {
      top: 0;
      width: 5rem;
      height: 100vh;
    }
  
    .navbar:hover {
      width: 16rem;
    }
  
    .navbar:hover .link-text {
      display: inline;
    }
  }
`;

const iconCSS = css`
  width: 30px;
  height: 30px;
  flex-shrink: 0;
`;

export const HomeIcon = styled(AiOutlineHome)`${iconCSS}`;
export const ContactIcon = styled(AiOutlineContacts)`${iconCSS}`;
export const AboutUsIcon = styled(AiOutlineInfoCircle)`${iconCSS}`;
export const DarkModeIcon = styled(BiSun)`${iconCSS}`;
