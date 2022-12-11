import React from "react";
import { useDrop } from "react-dnd";
import ITEM_TYPE from "../data/types";
import { statuses } from "../data";
import styled from "styled-components";

const DropWrapper = ({ onDrop, children, status }) => {
    const [{ isOver }, drop] = useDrop({
        accept: ITEM_TYPE,
        canDrop: (item) => {
            const itemIndex = statuses.findIndex(si => si.status === item.status);
            const statusIndex = statuses.findIndex(si => si.status === status);
            return [itemIndex + 1, itemIndex - 1, itemIndex].includes(statusIndex);
        },
        drop: (item, monitor) => {
            onDrop(item, monitor, status);
        },
        collect: monitor => ({
            isOver: monitor.isOver()
        })
    });

    return (
        <NewTaskContainer ref={drop}>
            {React.cloneElement(children, { isOver })}
        </NewTaskContainer>
    )
};

export default DropWrapper;

const NewTaskContainer = styled.div`
width: 19%;
padding: 40px 10px 0px 10px;
border-right:1px solid #F3F3F3;


&:nth-child(4) div div{
    background-color: #F0F0F0 !important;
}
&:nth-child(4) div div span{
   color: #A5A5A5;
}
&:nth-child(4) div div span:first-child{
    text-decoration-line: line-through;
}
`;