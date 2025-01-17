import React, { useState } from "react";
const Todolist = () => {
    const [inputValue, setInputValue] = useState('');
    const [items, setItems] = useState([]);
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    };
    const addTask = () => {
        if (inputValue.trim() !== '') {
            setItems([...items, { text: inputValue, completed: false }]);
            setInputValue('');
        }
    };
    const deleteItem = (index) => {
        setItems(items.filter((_, i) => i !== index));
    };
    const toggleTask = (index) => {
        setItems(items.map((item, i) => {
            if (i === index) {
                return { ...item, completed: !item.completed };
            }
            return item;
        }));
    };

    const countPendingTasks = () => {
        let count = 0;
        for (const item of items) {
            if (!item.completed) {
                count++;
            }
        }
        return count;
    };
    const pendingTasks = countPendingTasks();
    return (
        <div className="container">
            <h1>Tareas</h1>
            <div className="Task">
                <input
                    onKeyDown={handleKeyPress}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    type="text"
                    placeholder="Escribe aquí la tarea"
                    className="input1"
                    id="exampleInputPassword1"
                />
                <button onClick={addTask} type="submit" className="btn btn-success mx-2">Agregar Tarea</button>
            </div>
            <ol className="list-group pt-2">
                {items.map((item, index) => (
                    <li key={index} className={`list-group-item fs-5 rounded d-flex justify-content-start ${item.completed ? 'completed' : ''}`}>
                        <span style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>{item.text}</span>
                        <button onClick={() => toggleTask(index)} className="completado">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-check-fill" viewBox="0 0 16 16">
  <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2m-5.146-5.146-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708"/>
</svg>
                        </button>
                        <button onClick={() => deleteItem(index)} className="papelera">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
</svg>
                        </button>
                    </li>
                ))}
            </ol>
            <div className="countTareas d-flex p-1">
            <p className="pendientes px-5" style={{ fontWeight: "bold", color: "black", fontSize: "20px" }}>
                    {pendingTasks !== 0 ? 'nº de tareas pendientes: ' + pendingTasks : <span>No tienes tareas pendientes</span>}</p>
                <p className="añadidas px-5" style={{ fontWeight: "bold", color: "black", fontSize: "20px" }}>
                    {items.length !== 0 ? 'nº de tareas: ' + items.length : <span>No hay tareas</span>}</p>
            </div>
        </div>
    );
};
export default Todolist;

