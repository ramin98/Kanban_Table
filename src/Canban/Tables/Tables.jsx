import React, { useState } from "react";
import Item from "./components/Item";
import DropWrapper from "./components/DropWrapper";
import Col from "./components/Col";
import { data, statuses } from "./data";
import styled from "styled-components";
import CreateStatus from "../CanbanTable/CreateStatus";

const Tables = ({setCounter}) => {
    const [items, setItems] = useState(data);

    const showCount = () => {
       
       let newTask = Array.from(document.querySelector("#tables").children[0].firstElementChild.children)
       let inProgress = Array.from(document.querySelector("#tables").children[1].firstElementChild.children)
       let inReview = Array.from(document.querySelector("#tables").children[2].firstElementChild.children)
       let completed = Array.from(document.querySelector("#tables").children[3].firstElementChild.children)
        
       setCounter({
            open: newTask.length,
            inProgress: inProgress.length,
            inReview: inReview.length,
            completed: completed.length
       })
     }
         
    const onDrop = (item, monitor, status) => {
        const mapping = statuses.find(si => si.status === status);

        setItems(prevState => {
            const newItems = prevState
                .filter(i => i.id !== item.id)
                .concat({ ...item, status, icon: mapping.icon });
            return [ ...newItems ];
        });
        
        showCount()


    };

    const moveItem = (dragIndex, hoverIndex) => {
        const item = items[dragIndex];
        setItems(prevState => {
            const newItems = prevState.filter((i, idx) => idx !== dragIndex);
            newItems.splice(hoverIndex, 0, item);
            return  [ ...newItems ];
        });
        
    };

    return (
        <MainTableContainer id="tables">
            {statuses.map((s,index) => {
                return (
                        <DropWrapper key={index} onDrop={onDrop} status={s.status}>
                            <Col>
                                {items
                                    .filter(i => i.status === s.status)
                                    .map((i, idx) => <Item key={i.id} item={i} index={idx} moveItem={moveItem} status={s} />)
                                }
                            </Col>
                        </DropWrapper>
                );
            })}
            <CreateStatus/>
        </MainTableContainer>
    );
};

export default Tables;



const MainTableContainer = styled.div`
     display: flex;
     min-height: calc(100vh - 146.33px);
     padding-bottom:10px;
`;
