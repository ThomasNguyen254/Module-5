import React, {useState, useEffect} from 'react';
import axios from 'axios';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const [alertMess, setAlertMess] = useState('');

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then((response) => {
                setTodos(response.data)
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            })
    }, [])

    const handleChange = (event) => {
        setNewTodo(event.target.value)
    }

    const handleSubmit = () => {
        axios.post('https://jsonplaceholder.typicode.com/todos', {
            title: newTodo, completed: false,
        })
            .then((response) => {
                setTodos([...todos, response.data])
                setNewTodo('');
                setAlertMess('Todo added successfully! ')
            })
            .catch((error) => {
                console.error('Error adding todo:', error);
                setAlertMess('Error adding todo.');
            })
    }

    return (
        <div>
            <h1>Todo list</h1>
            <input
                type="text"
                placeholder="Enter new todo"
                value={newTodo}
                onChange={handleChange}
            />
            <button onClick={handleSubmit}>Submit</button>
            <p>{alertMess}</p>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </div>
    )

}
export default TodoList;