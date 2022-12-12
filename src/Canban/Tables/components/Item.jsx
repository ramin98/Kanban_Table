import React, { Fragment, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import ITEM_TYPE from "../data/types";
import styled from "styled-components";

const Item = ({ item, index, moveItem, status }) => {

    const ref = useRef(null);

    const [, drop] = useDrop({
        accept: ITEM_TYPE,
        hover(item, monitor) {
            if (!ref.current) {
                return
            }
            const dragIndex = item.index;
            const hoverIndex = index;

            if (dragIndex === hoverIndex) {
                return
            }

            const hoveredRect = ref.current.getBoundingClientRect();
            const hoverMiddleY = (hoveredRect.bottom - hoveredRect.top) / 2;
            const mousePosition = monitor.getClientOffset();
            const hoverClientY = mousePosition.y - hoveredRect.top;

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }

            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }
            moveItem(dragIndex, hoverIndex);
            item.index = hoverIndex;
        },
    });

    const [{ isDragging }, drag] = useDrag({
        type: ITEM_TYPE,item: {...item, index},
        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    });

    drag(drop(ref));

    return (
        <Fragment>
            <Tasks primary={item.color} ref={ref}>
                <TasksInfo>{item.content}</TasksInfo>
                <TasksTime>{item.date}</TasksTime>
            </Tasks>
        </Fragment>
    );
};

export default Item;

const Tasks = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 15px;
gap: 10px;
border-radius: 8px;
background-color: ${props => props.primary};
cursor:grab;
`;

const TasksInfo = styled.span`

`;

const TasksTime = styled.span`
color: #435E52;
`;
