import React from 'react';
import avatar from '../../assets/images/avatar.png'
import styled from 'styled-components';

function WorkSpace(){
    return (
      <WorkSpaceContainer>
        <WorkSpaceDiv>
            <WorkSpaceAvatar src={avatar} alt="smallAvatar" />
            <WorkSpaceText>My workspace</WorkSpaceText>
        </WorkSpaceDiv>
      </WorkSpaceContainer>
    );
  
}

export default WorkSpace;

const WorkSpaceContainer = styled.div`
    
`;
const WorkSpaceDiv = styled.div`
     display: flex;
     align-items: center;
     gap: 8px;
     height: 32px;
     margin-top: 19px;
     padding-left: 16px;
     background-color: #2D4071;
     width: 100%;
     color: white;
     font-family: 'Roboto';
     font-weight: 400;
     font-size: 14px;
`;

const WorkSpaceAvatar = styled.img`
width: 22px;
height: 22px;
`;

const WorkSpaceText = styled.span`
    
`;