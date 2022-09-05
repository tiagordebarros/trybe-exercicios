import React from "react"

function TodoList({ tasks }) {
    return(
        <div>
            <h2>Minhas tarefas</h2>
            <ul>
                { tasks.map((task) => 
                    <li>{ task }</li>
                ) }
            </ul>
        </div>
    )
}

export default TodoList;
