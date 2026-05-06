import React from 'react';
import './HomePage.css';
import ListItem from './components/ListItem';
import checkmark from './resources/checkmark-circle-outline.svg';
import flower from './resources/flower-outline.svg';
import paper from './resources/papper.png';
import { useState, useEffect } from "react";
import * as fs from 'fs';


type Task = {
    id: number;
    text: string;
    priority?: boolean;
    createdAt: Date;
    dueDate?: Date;
}

function HomePage() {
    const [unfinishedTasks, setUnfinishedTasks] = useState<Task[]>([]);
    const [isClicked, setIsClicked] = useState(false);
    const [finishedTasks, setFinishedTasks] = useState<Task[]>([]);

    useEffect(() => {
        async function fetchData(){
            const jsonString = await getJsonString();
            console.log(jsonString);
            localStorage.setItem('jsonString', JSON.stringify(jsonString));
            setFinishedTasks(jsonString.finishedTasks);
            setUnfinishedTasks(jsonString.unfinishedTasks);
        }
        fetchData();
        
    }, [])

    function addFinishedTask(task:Task){
        setFinishedTasks([...finishedTasks, task]);
    }
    
    function addUnfinishedTask(task:Task){
        setUnfinishedTasks([...unfinishedTasks, task]);
    }

    async function getJsonString() {
        const response = await fetch('/tasks.json');
        const data = await response.json();
        return data;
    }




  return (
    <div className="homepage-container">
        <div className = "grid1-home-page-header">
            <div id="header-container">
            <div id="welcome-container">
                <p id="welcome-text" >TO DO LIST</p>
            </div>
            <div id="flower-image-container">
                <img src={flower} alt="flower-icon" id="flower-icon"/>
            </div>
           
        </div>
        <hr id="header-hr"></hr>
    </div>

    <div className = "grid2-to-do-list">
        <div id="paper-div">
            <div id = "list-container">
                {unfinishedTasks.map((task) => (
                    <ListItem  
                        key={task.id}
                        text = {task.text}
                        onChange={() => setIsClicked(!isClicked)}/>
                ))};
                
            </div>
            
        </div>
    </div>

    <div className = "grid3-add-list">
        <p id="add-text"> Lägg till nåt nytt att göra! </p>
        <div id ="add-container">
            <div id="image-container">
                <img src={checkmark} alt="checkmark" id="checkmark"/>
            
            </div>
            <div id="input-container">
                <input type="text" id="add-input" placeholder="...Laga matlådor"></input>
            </div>
                
        </div>

        </div>
    </div>
  );
}

export default HomePage;
