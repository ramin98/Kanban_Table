import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/css/index.css'
import App from './App'
import { DndProvider } from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

let root = createRoot(document.querySelector("#root"))

root.render(
    <StrictMode>
      <DndProvider backend={HTML5Backend}>
      <App/>
      </DndProvider>
    </StrictMode>
)
