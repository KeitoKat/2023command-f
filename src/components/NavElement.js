import { FaBars } from 'react-icons/fa'
import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
export const PrimaryNav = styled.nav`
  z-index: 14;
  flex-direction: row;
  width: 100%;
  height: 90px;
  display: flex;
  background: #ffffff;
  justify-content: space-between;
  padding: 0.1rem calc((75vw - 1000px) / 2);
`

export const MenuLink = styled(Link)`
  color: #000000;
  display: flex;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
  padding: 0 2.6rem;
  height: 100%;
  &.active {

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8.4px 12.4px;
gap: 16.8px;

width: 90px;
height: 44.4px;

background: #9565D1;
color: #ffffff;
border-radius: 60px;
  }
`
export const Hamburger = styled(FaBars)`
  display: none;
  color: #ffffff;
  @media screen and (max-width: 100%) {
    display: block;
    font-size: 1.9rem;
    top: 0;
    right: 1;
    position: absolute;
    cursor: pointer;
    transform: translate(-100%, 75%);
  }
`
// max-width: 768px
export const Menu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -30px;
  @media screen and (max-width: 100%) {
    display: none;
  }
`
// max-width: 850px