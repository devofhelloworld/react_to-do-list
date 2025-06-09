import React, { useState } from 'react';

function To_do_list() {
    const [lists, setLists] = useState([]);
    const [newtask, setNewTask] = useState("");

    function updatenewtask(event) {
        setNewTask(event.target.value);
    }
    function add() {

        if (newtask.length > 0) {

            setLists(l => [...l, newtask]);
            setNewTask("");
        }
    }
    function removetask(index) {
        setLists(lists.filter((_, i) => i !== index))
    }

    function uptask(index) {
        if (index > 0) {
            const newlists = [...lists];
            [newlists[index], newlists[index - 1]] = [newlists[index - 1], newlists[index]];

            setLists(newlists);
        }
    }

    function downtask(index) {
        if (index < lists.length - 1) {
            const newlists = [...lists];
            [newlists[index], newlists[index + 1]] = [newlists[index + 1], newlists[index]];

            setLists(newlists);
        }
    }
    return (
        <div className="box">
            <h1>To-Do-lists</h1>
            <input type="text" value={newtask} placeholder='Enter New Task' onChange={updatenewtask} />
            <button className='add' onClick={add}>Add</button>
            <ul>
                {lists.map((element, index) => <li key={index}>
                    <span className='text'>{element}</span>
                
                    <button className='delete' onClick={() => removetask(index)}>Delete</button>

                    <button className='buttons' onClick={() => uptask(index)}>👆</button>

                    <button className='buttons' onClick={() => downtask(index)}>👇</button>
                </li>)}

            </ul>
        </div>
    )
}

export default To_do_list