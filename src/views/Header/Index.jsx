import React from 'react';
import useGlobal from '../../hooks/useGlobal';
import { StyledHeader } from './Styles';
import logo from '../../assets/logo.png';

const Header = () =>
{
  const { auth, logoff } = useGlobal();
    return <StyledHeader>
      <img src={logo}/>  
    </StyledHeader>
    
}

export default Header;