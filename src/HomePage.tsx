import React from 'react';
import './HomePage.css';
import ListItem from './components/ListItem';
import checkmark from './resources/checkmark-circle-outline.svg';
import flower from './resources/flower-outline.svg';
import paper from './resources/papper.png';
import { useState, useEffect } from "react";
import FinishedItem from './components/FinishedItem';


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
    const [value, setValue] = useState("");

    useEffect(() => {
        const saved = localStorage.getItem("tasks");
        //If there already are saved tasks, load them
        if (saved) {
            const data = JSON.parse(saved);
            setFinishedTasks(data.finishedTasks);
            setUnfinishedTasks(data.unfinishedTasks);
        }
    }, []);

    function saveTasks(finished: Task[], unfinished: Task[]) {
    localStorage.setItem("tasks", JSON.stringify({
        finishedTasks: finished,
        unfinishedTasks: unfinished
    }));
    }

    function handleFinishedClick(task: Task){
        const updatedFinished = finishedTasks.filter((t) => t.id !== task.id);
        setFinishedTasks(updatedFinished);
        const updatedUnfinished = [...unfinishedTasks, task];
        setUnfinishedTasks(updatedUnfinished);
        saveTasks(updatedFinished, updatedUnfinished);
    }

    function addFinishedTask(task: Task, id:number) {
        const updated = [...finishedTasks, task];
        setFinishedTasks(updated);
        //remove from unfinished
        const updatedUnfinished = unfinishedTasks.filter((t) => t.id !== id);
        setUnfinishedTasks(updatedUnfinished);
        saveTasks(updated, updatedUnfinished);
    }

    function addUnfinishedTask(task: Task) {
        const updated = [...unfinishedTasks, task];
        setUnfinishedTasks(updated);
        saveTasks(finishedTasks, updated);
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
                        dueDate = {task.dueDate}
                        priority = {task.priority}
                        onChange={() => addFinishedTask(task, task.id)}/>
                ))}
                
            </div>
            
        </div>
    </div>

    <div className = "grid3-add-list">
        <div id ="add-container">
            <div id="image-container">
                <img src={checkmark} alt="checkmark" id="checkmark"/>
            
            </div>
            <div id="input-container">
                <input 
                    type="text" 
                    id="add-input" 
                    value={value}
                    placeholder="...Laga matlådor"
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            const newTask: Task = {
                                id: unfinishedTasks.length + finishedTasks.length + 1,
                                text: value,
                                createdAt: new Date()
                            }
                            addUnfinishedTask(newTask);
                            setValue("");
                        }
                    }}></input>
            </div>
                
        </div>
    </div>
    <div id = "grid4-finished-list">
        <div id="finished-list-container">
            {finishedTasks.map((task) => (
                <FinishedItem
                key = {task.id}
                text = {task.text}
                onChange = {() => handleFinishedClick(task)}/>
            )
        )}
        </div>
    </div>

</div>
);
}

export default HomePage;
