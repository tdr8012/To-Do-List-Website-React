import React from 'react'

export default function TodoCard(props) {
    const {children, handleDeleteTodo, handleEditTodo, index} = props
    return (
        <li className="todoItem" key = {index}>
            {children}
            <div className="actionContainer">
            <button onClick = {() => {
                handleDeleteTodo(index)
            }}>
                
                <i className="fa-solid fa-trash"></i>
            </button>

            <button onClick={() => {
                handleEditTodo(index)
                
            }}>
                <i className="fa-sharp fa-solid fa-pen-to-square"></i>
            </button>
            </div>
        </li>

     

    )
}
