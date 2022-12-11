import React from "react";
import styled from "styled-components";

const Col = ({ children }) => {
    return (
        <NewTaskContainer>
            {children}
        </NewTaskContainer>
    );
};

export default Col;

const NewTaskContainer = styled.div`
    display:flex;
    flex-direction:column;
    gap:10px;
`;