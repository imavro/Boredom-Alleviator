import React, { useState } from "react"

function ToDoList(){

    const [task, setTask] = useState([]);
    const tasks = [ "Logical Redstone", "React js", "Memory Palace", "Vim",
                            "Life Admin", "Workout", "Schedule", "Read Book"]


    function addTask() {
        const randomIndex = Math.floor(Math.random() * tasks.length);
        setTask(tasks[randomIndex]);
    }


    return (
        <div className="to-do-list">

            <h1>Boredom Alleviator</h1>

            <div>
                <button
                    className="add-button"
                    onClick={addTask}>
                    RUN
                </button>
            </div>

            {task && (
                <div className="task-display">
                    <span className="text">{task}</span>
                </div>
            )}

        </div>);
}
export default ToDoList