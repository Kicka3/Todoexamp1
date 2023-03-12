import React, {useState} from 'react';
import './App.css';
import {TasksType, Todolist} from "./Todolist";


export type FilterValuesType = "all" | "completed" | "active";

function App() {

    let [tasks1, setTasks1] = useState<Array<TasksType>>([
        {id: 1, title: "Css", isDone: true},
        {id: 2, title: "JavaScript", isDone: false},
        {id: 3, title: "React", isDone: false},
        {id: 4, title: "Redux", isDone: false},
    ]);
    let [filter, setFilter] = useState<FilterValuesType>("all");

    // let [tasks2, setTasks2] = useState([
    //     {id: 1, title: "Chat-bots", isDone: true},
    //     {id: 2, title: "Todolist", isDone: false},
    //     {id: 3, title: "Social net", isDone: false},
    // ]);


    //
    // let tasks3: Array<TasksType> = [
    //     {id: 1, title: "Curs", isDone: false},
    //     {id: 2, title: "Internet-shop", isDone: false},
    //     {id: 3, title: "Samurai", isDone: true},
// ]

    function removeTask(id: number) {
        let filteredTasks1 = tasks1.filter(t => t.id !== id)
        setTasks1(filteredTasks1);
    }

    // function removeTas2k(id: number) {
    //     let filteredTasks1 = tasks2.filter (t => t.id !== id)
    //     setTasks2(filteredTasks1);

    function changeFilter(value: FilterValuesType) {
        setFilter(value);
    }

    let tasksForTodolist = tasks1;
    if (filter === "completed") {
        tasksForTodolist = tasks1.filter(t => t.isDone === true);

    }
    if (filter === "active") {
        tasksForTodolist = tasks1.filter(t => t.isDone === false);
    }


    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={tasksForTodolist}
                      removeTask={removeTask}
                      changeFilter={changeFilter}/>

            {/*<Todolist title="What to do"*/}
            {/*          tasks={tasks2}*/}
            {/*          removeTask={removeTask}/>*/}
            {/*<Todolist title="What to watch" tasks={tasks3}/>*/}


        </div>
    );
}

export default App;
