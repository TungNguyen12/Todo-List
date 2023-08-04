import { useState } from "react";
import "./App.css";
import AddToDo from "./components/AddToDo";
import Button from "@mui/material/Button"

function App() {



    return (
        <div className="App">
            <h1>My Todo List</h1>
            
             <AddToDo />
        </div>
    );
}

export default App;
