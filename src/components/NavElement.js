import { FaBars } from 'react-icons/fa'
import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
export const PrimaryNav = styled.nav`
  z-index: 14;
  height: 113px;
  display: flex;
  background: #FF9F1C;
  justify-content: space-between;
  padding: 0.18rem calc((80vw - 1000px) / 2);
`

export const MenuLink = styled(Link)`
  color: #fff;
  display: flex;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
  padding: 0 2.7rem;
  height: 100%;
  &.active {
    color: #000000;
  }
`
export const Hamburger = styled(FaBars)`
  display: none;
  color: #ffffff;
  @media screen and (max-width: 768px) {
    display: block;
    font-size: 1.9rem;
    top: 0;
    right: 0;
    position: absolute;
    cursor: pointer;
    transform: translate(-100%, 75%);
  }
`
export const Menu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -25px;
  @media screen and (max-width: 850px) {
    display: none;
  }
`