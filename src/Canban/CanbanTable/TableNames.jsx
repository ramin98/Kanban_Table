import styled from 'styled-components';
import plus from '../../assets/images/gray-plus.svg'

function TableNames({counter}){
  

    return (
      <TableNamesContainer>
        <TableNamesDiv>
          <TableNamesText>
              New task
              <TableNamesCounter>{counter.open}</TableNamesCounter>
          </TableNamesText>
        </TableNamesDiv>
        <TableNamesDiv>
          <TableNamesText>
              Scheduled
              <TableNamesCounter>{counter.inProgress}</TableNamesCounter>
          </TableNamesText>
        </TableNamesDiv>
        <TableNamesDiv>
          <TableNamesText>
              In progress
              <TableNamesCounter>{counter.inReview}</TableNamesCounter>
          </TableNamesText>      
        </TableNamesDiv>
        <TableNamesDiv>
          <TableNamesText>
              Completed
              <TableNamesCounter>{counter.completed}</TableNamesCounter>
          </TableNamesText>   
        </TableNamesDiv>
        <TableNamesDiv>
          <TableNamesText>
              <PlusImg src={plus} alt="plus"/>
              Create status
          </TableNamesText>   
        </TableNamesDiv>  
      </TableNamesContainer>
    );
  
}

export default TableNames;

const TableNamesContainer = styled.div`
     width: 100%;
     display:flex;
     border-bottom: 1px solid #F3F3F3;
`;

const TableNamesDiv = styled.div`
     width: 19%;
     display:flex;
     justify-content:center;
     align-items:center;
     padding-top:27px;
     padding-bottom:15px;
     
     &:nth-child(4){
      border-right: 1px solid #F3F3F3;
     }

     &:last-child{
        width: 24%;
        justify-content:flex-start;
        padding-left:35px;
        cursor:pointer;
     }
`;

const TableNamesText = styled.p`
     display:flex;
     flex-shrink:0;
     align-items:center;
`;

const PlusImg = styled.img`
     padding-right:4px;
`;

const TableNamesCounter = styled.span`
     padding: 2px 9px;
     background-color: #E8EBEF;
     margin-left:10px;
     border-radius: 100px;
     display:inline-block;
     color: #8C939F;
`;