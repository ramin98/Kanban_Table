import roadmap from '../assets/images/roadmap.svg'
import calendar from '../assets/images/ico_calendar.svg'
import tasks from '../assets/images/ico_tasks.svg'
import notes from '../assets/images/ico_notes.svg'
import files from '../assets/images/ico_files.svg'
import styled from 'styled-components'

function Tools(){
    return (
      <ToolsContainer>
        <ToolsHeader>Tools</ToolsHeader>
        <ToolsList>
            <ToolsListDiv>
              <ToolsListItem id='roadmap' name='tools' type='radio'/>
              <ToolsListLabel htmlFor='roadmap'><ToolsListLabelImg src={roadmap} alt="roadmap" /><ToolsListLabelText>Roadmap</ToolsListLabelText></ToolsListLabel>
            </ToolsListDiv>
            <ToolsListDiv>
              <ToolsListItem id='calendar' name='tools' type='radio' defaultChecked/>
              <ToolsListLabel htmlFor='calendar'><ToolsListLabelImg src={calendar} alt="calendar" /><ToolsListLabelText>Schedule</ToolsListLabelText></ToolsListLabel>
            </ToolsListDiv>
            <ToolsListDiv>
              <ToolsListItem id='tasks' name='tools' type='radio'/>
              <ToolsListLabel htmlFor='tasks'><ToolsListLabelImg src={tasks} alt="tasks" /><ToolsListLabelText>Tasks</ToolsListLabelText></ToolsListLabel>
            </ToolsListDiv>
            <ToolsListDiv>
              <ToolsListItem id='notes' name='tools' type='radio'/>
              <ToolsListLabel htmlFor='notes'><ToolsListLabelImg src={notes} alt="notes" /><ToolsListLabelText>Notes</ToolsListLabelText></ToolsListLabel>
            </ToolsListDiv>
            <ToolsListDiv>
              <ToolsListItem id='files' name='tools' type='radio'/>
              <ToolsListLabel htmlFor='files'><ToolsListLabelImg src={files} alt="files" /><ToolsListLabelText>Files</ToolsListLabelText></ToolsListLabel>
            </ToolsListDiv>
        </ToolsList>
        
      </ToolsContainer>
    );
  
}

export default Tools;

const ToolsContainer = styled.div`
     width: fit-content;
     background-color:#F5F8FA;
     padding-right: 16px;
     position:fixed;
     height: 100vh;
     margin-left: 219px;
`;

const ToolsHeader = styled.h2`
    padding-left: 16px;
    margin-top: 24px;
`;

const ToolsList = styled.div`
    margin-top: 26px;
`;

const ToolsListDiv = styled.div`
    
`;

const ToolsListLabelImg = styled.img`
     filter: grayscale(1);
`;

const ToolsListLabelText = styled.span`
    
`;


const ToolsListLabel = styled.label`
    width: 138px;
    height: 50px;
    padding: 16px;
    display: flex;
    gap: 15px;
    border-radius: 0px 8px 8px 0px;
    align-items: center;
    font-size: 14px;
    cursor: pointer;
    transition: 0.5s;
    position: relative;

    &:hover{
      background-color: white;
      transition: 0.5s;
    }
`;

const ToolsListItem = styled.input`
    display:none;

    &:checked ~ label{
    background-color: white;
    }

    &:checked ~ label img{
      filter: sepia(100%) hue-rotate(190deg) saturate(900%);
    }

    &:checked ~ label::before{
    position: absolute;
    content: '';
    left: 0;
    width: 4.12px;
    height: 100%;
    background-color: #0094FF;
    border-radius: 0px 10px 10px 0px;
    }
`;