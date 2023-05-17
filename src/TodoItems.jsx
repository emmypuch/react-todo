// eslint-disable-next-line react/prop-types
export function TodoItems ({completed, id, title, toggleTodo, deleteTodo}) {
    return (
        <li>
            <label>
                <input type="checkbox" defaultChecked={completed} 
                onChange={e => toggleTodo(id, e.target.checked)} 
                />
                {title}
            </label>
            <button onClick={() => deleteTodo(id)} className="btn btn-danger">Delete</button>
        </li>
    )
}