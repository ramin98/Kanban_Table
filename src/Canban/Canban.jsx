import UserOptions from './UserOptions';
import styled from 'styled-components';
import TableNames from './CanbanTable/TableNames';
import Tables from './Tables/Tables';
import { useState } from 'react';

function Canban(){
  let [counter, setCounter] = useState({
    open:'4',
    inProgress:'3',
    inReview:'3',
    completed:'5'
  })

    return (
      <CanbanContainer>
       <UserOptions/>
       <TableNames counter={counter}/>
       <Tables setCounter={setCounter}/>
      </CanbanContainer>
    );
  
}

export default Canban;

const CanbanContainer = styled.div`
     margin-left: 373px;    
`;