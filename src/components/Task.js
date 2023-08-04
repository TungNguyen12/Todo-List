import { faCircleCheck, faEdit, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EditTask from "./EditTask";
import React, { useState } from "react";

const Task = ({title, deadline, deleteToDo, id, newTitle, setNewTitle, newDeadline, setNewDeadline}) => {

  const [show, setShow] =useState(false)

  const edit = (e) => {
    setShow(!show)
  }

    return (
      <>
        <li className="todo">
            <div className="info">
                <p className="title">{title}</p>
                <p className="deadline">{deadline}</p>
            </div>

            <div className="iconsWrap">
                <span>
                    <FontAwesomeIcon icon={faCircleCheck} className="icon--check"/>
                </span>
                <span>
                    <FontAwesomeIcon icon={faEdit} className="icon--edit" onClick={(e) => edit()}/>
                    {/* onClick={(e) => markDone(id)} style={{color: color}} */}
                </span>
                <span>
                    <FontAwesomeIcon icon={faTrashCan} onClick={() => deleteToDo(id)} className="icon--delete"/>
                </span>
            </div>
        </li>

        {show && <EditTask newTitle={newTitle} newDeadline={newDeadline}/>}
        </>
    );
};

export default Task;
