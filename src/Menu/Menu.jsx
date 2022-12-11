import logo from '../assets/images/bordio-logo.svg'
import Search from './Search';
import WorkSpace from './WorkSpace/WorkSpace';
import Favorites from './WorkSpace/Favorites';
import MyProjects from './WorkSpace/MyProjects';
import styled from 'styled-components';

function Menu(){
    return (
      <MenuContainer>
        <Logo src={logo} alt="logo" />
        <Search/>
        <WorkSpace/>
        <Favorites/>
        <MyProjects/>
      </MenuContainer>
    );
  
}

export default Menu;

const MenuContainer = styled.div`
     width: fit-content;
     background-color:#0F1D40;
     padding-top: 26px;
     height: 100vh;
     position:fixed;
`;

const Logo = styled.img`
      margin-left: 16px;
      margin-right: 16px;
`;