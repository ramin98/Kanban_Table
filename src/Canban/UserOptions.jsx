import styled from 'styled-components';
import whiteArrow from '../assets/images/white-arrow.svg'
import plus from '../assets/images/plus-sign.svg'
import { useState } from 'react';
import search from '../assets/images/search.svg'
import notification from '../assets/images/notification.svg'
import avatar from '../assets/images/avatar.png'
function UserOptions(){

let [flag, setFlag] = useState(false)

    return (
      <UserOptionsContainer>
       <UserOptionsLeftSide>
         <AddNew>
           <Plus src={plus} alt='plus'/>
           Add new
         </AddNew>
         <KanbanAndFilter onClick={() => setFlag(!flag)}>
           Kanban
           <WhiteArrow primary={flag} src={whiteArrow} alt='whiteArrow'/>
           {flag && <KanbanDP>
              <KanbanDPitem>Bord View</KanbanDPitem>
              <KanbanDPitem>Table View</KanbanDPitem>
              <KanbanDPitem>Kanban</KanbanDPitem>
              </KanbanDP>}
         </KanbanAndFilter>
         <KanbanAndFilter>
           Filter
           <WhiteArrow src={whiteArrow} alt='whiteArrow'/>
         </KanbanAndFilter>
       </UserOptionsLeftSide>
       <UserOptionsRightSide>
        <SearchContainer>
          <SearchInput type="text" placeholder='Search...'/>
          <SearchImg src={search} alt="search" />
        </SearchContainer>
        <NotificationContainer>
           <NotificationImg src={notification} alt="notification"/>
           <NotificationText>99+</NotificationText>
        </NotificationContainer>
        <UserOptionsAvatar src={avatar} alt="mediumAvatar"/>
       </UserOptionsRightSide>
      </UserOptionsContainer>
    );
  
}

export default UserOptions;

const UserOptionsContainer = styled.div`
     background-color: #FFFFFF;
     box-shadow: 0px 2px 4px #F0F1F2;
     height: 80px;
     display:flex;
     justify-content:space-between;
     padding:20px;
`;

const UserOptionsLeftSide = styled.div`
     display:flex;
     gap:16px;
     align-items:center;
`;

const UserOptionsRightSide = styled.div`
     display:flex;
     flex-shrink:0;
     align-items:center;
`;

const AddNew = styled.button`
     display:flex;
     flex-shrink:0;
     align-items:center;
     padding:15px 25px 15px 25px;
     background-color: #0094FF;
     border-radius: 50px;
     border:none;
     cursor:pointer;
     font-family: Roboto;
`;

const KanbanAndFilter = styled.div`
     display:flex;
     flex-shrink:0;
     align-items:center;
     padding:15px 25px 15px 25px; 
     background-color: #F5F8FA;
     border-radius: 50px;  
     cursor:pointer;
     &:nth-child(2){
          position:relative;
     }

`;

const WhiteArrow = styled.img`
     margin-left:15px;
     transform: rotate(${props => props.primary ? "180deg" : "0deg"});
`;

const Plus = styled.img`
     margin-right:7px;
`;

const KanbanDP = styled.ul`
     padding:6px; 
     background-color: #FFFFFF;
     box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.15);
     border-radius: 8px; 
     position:absolute;
     top: 55px;
     right: 0;
     width:132px;
     cursor:pointer;
`;

const KanbanDPitem = styled.li`      
     border-radius: 4px;
     padding:12px 8px 12px 8px; 
     transition:0.3s;
     &:hover{
          background-color: #F5F8FA;
          transition:0.3s;
     }
`;

const SearchContainer = styled.div`
     display: flex;
     width: 180px;
     height: 40px;
     background-color: #F5F8FA;
     border-radius: 50px;
     padding: 16px 12px 16px 12px;
     justify-content:space-between;;
     align-items:center;
`;

const SearchInput = styled.input`
     background-color: transparent;
     border: none;
     outline: none;
     width: 142px;
`;

const SearchImg = styled.img`
     display: block;
     cursor:pointer;
`;

const NotificationContainer = styled.div`
     width: 32px;
     height: 32px;
     position:relative;
     margin-left:23px;
     cursor:pointer;

     &:hover span{
          transition:0.3s;
          background:black;
     }
`;

const NotificationImg = styled.img`
     position:absolute;
     bottom:0;
     left:0;
`;

const UserOptionsAvatar = styled.img`
     margin-left:11px;
     cursor:pointer;
     width: 40px;
     height: 40px;
`;

const NotificationText = styled.span`
     background-color: #F21247;
     border: 1px solid #FFFFFF;
     border-radius: 4px;
     padding:5px;
     position:absolute;
     top:0;
     right:0;
     font-weight: 400;
     font-size: 10px;
     color:white;
     transition:0.3s;
`;