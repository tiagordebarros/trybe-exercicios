import { useState } from "react";

function useArray() {
    const [todos, setTodos] = useState([]);

    const addTodos = (userInput) => {
        setTodos(todos.concat(userInput));
    };

    return [todos, addTodos];

}

export default useArray;
