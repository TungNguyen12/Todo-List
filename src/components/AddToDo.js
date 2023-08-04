import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleCheck,
    faPen,
    faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Button from "@mui/material/Button";
import Task from "./Task";

const AddToDo = () => {
    const [show, setShow] = useState(false);
    const [newTitle, setNewTitle] = useState("");
    const [newDeadline, setNewDeadline] = useState("");
    const [newStatus, setNewStatus] = useState("");
    const [todoList, setTodoList] = useState([]);


    // Add item function

    const addItem = (e) => {
        e.preventDefault();
        if (!newTitle && newDeadline) {
            alert("Please add the title");
            return;
        } else if (!newDeadline && newTitle) {
            alert("Please add the deadline");
            return;
        } else if (!newTitle && !newDeadline) {
            alert("Please add the title and the deadline");
            return;
        }

        const todo = {
            id: Math.floor(Math.random() * 1000),
            title: newTitle,
            deadline: newDeadline,
            status: newStatus,
        };

        setTodoList([...todoList, todo]);

        console.log(todo);

        setNewTitle("");
        setNewDeadline("");
        setNewStatus("");
    };

    // Delete item function
    const deleteToDo = (id) => {
        // const newArray = todoList.filter((todo) => todo.id !== id);
        setTodoList(todoList.filter((todo) => todo.id !== id));
    };

    //Mark todo as completed
    const markDone = (id) => {
        let newToDo = todoList.map(todo => {
            if(todo.id === id) {
                const color = "green"
            }
        })
    };

    // Cancel button
    const cancel = (e) => {
        setNewTitle("");
        setNewDeadline("");
        setNewStatus("");
        setShow(false);
    };

    // Close button
    const close = (e) => {
        setShow(false);
    }

    // Change todo for update
    const changeTodo = (e) => {};

    // Update todo
    const updateTodo = () => {};

    return (
        <div>
            <Button variant="contained" onClick={() => setShow(!show)}>
                Add a new to-do
            </Button>
            <div className="noTask">{todoList && todoList.length ? "" : "No task..."}</div>

            {show && ( //to show the form
                <form className="create--task">
                    <div className="input">
                        <input
                            type="text"
                            placeholder="Title"
                            value={newTitle}
                            onChange={(e) => setNewTitle(e.target.value)}
                        />
                    </div>

                    <div className="input">
                        <input
                            type="text"
                            placeholder="Deadline"
                            value={newDeadline}
                            onChange={(e) => setNewDeadline(e.target.value)}
                        />
                    </div>

                    <div className="input">
                        <input
                            type="text"
                            placeholder="Status"
                            value={newStatus}
                            onChange={(e) => setNewStatus(e.target.value)}
                        />
                    </div>

                    <div className="buttons">
                        <Button variant="contained" onClick={(e) => addItem(e)}>
                            Add
                        </Button>

                        <Button
                            variant="contained"
                            color="error"
                            onClick={(e) => cancel(e)}
                        >
                            Cancel
                        </Button>

                        <Button
                            variant="contained"
                            color="warning"
                            onClick={(e) => close(e)}
                        >
                            Close
                        </Button>
                    </div>
                </form>
            )}

            <ul className="todos">
                {todoList.map((todo) => (
                    <Task
                        key={todo.id}
                        id={todo.id}
                        title={todo.title}
                        deadline={todo.deadline}
                        status={todo.status}
                        deleteToDo={deleteToDo}
                    />
                ))}
            </ul>
        </div>
    );
};

export default AddToDo;
