import arrow from '../../assets/images/arrow.svg'
import plus from '../../assets/images/plus-sign.svg'
import styled from 'styled-components';

function MyProjects(){
    return (
      <MyProjectsContainer>
         <MyProjectsHeader>
         <MyProjectsHeaderDiv>
          <MyProjectsHeaderImg src={arrow} alt="arrow" />
          <MyProjectsHeaderText>My Projects</MyProjectsHeaderText>
          </MyProjectsHeaderDiv>
          <PlusImg src={plus} alt="plus" />
         </MyProjectsHeader>
          <MyProjectList>
            <MyProjectListItem>Marketing</MyProjectListItem>
            <MyProjectListItem>Mobile App</MyProjectListItem>
            <MyProjectListItem>Marketing</MyProjectListItem>
            <MyProjectListItem>Mobile App</MyProjectListItem>
            <MyProjectListItem>Marketing</MyProjectListItem>
            <MyProjectListItem>Mobile App</MyProjectListItem>
          </MyProjectList>
      </MyProjectsContainer>
    );
  
}

export default MyProjects;

const MyProjectsContainer = styled.div`
    margin-left: 16px;
    margin-right: 16px;
    margin-top: 17px;
`;
const MyProjectsHeader = styled.div`
    display: flex;
    align-items: center;
    color: white;
    cursor: pointer;
    justify-content:space-between;

    &:hover img{
      display:inline-block;
    }
`;

const MyProjectsHeaderDiv = styled.div`
    display: flex;
    align-items: center;
`;

const MyProjectsHeaderImg = styled.img`
    
`;

const PlusImg = styled.img`
    display:none;
`;

const MyProjectsHeaderText = styled.span`
    margin-left:15px;
`;


const MyProjectList = styled.ul`
    
`

const MyProjectListItem = styled.li`
    margin-top: 18px;
    color: #8C939F;
    cursor: pointer;  

    &:hover{
      transition: 0.3s;
      color: white;
  }
    
`