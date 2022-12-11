import Canban from './Canban/Canban';
import Menu from './Menu/Menu'
import Tools from './Menu/Tools';
import styled from 'styled-components';

function App(){
    return (
      <AppContainer>
       <Menu/>
       <Tools/>
       <Canban/>
      </AppContainer>
    );
  
}

export default App;

const AppContainer = styled.div`
    
`;

