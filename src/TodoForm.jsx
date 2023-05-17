import { useState } from "react"

// eslint-disable-next-line react/prop-types
export function TodoForm({onSubmit}) {
    const [newItem, setNewItem] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        if (newItem === '') return
        // eslint-disable-next-line react/prop-types
        onSubmit(newItem)

        setNewItem('')
    }
    return (
        <form onSubmit={handleSubmit} className="new-item-form">
            <div className="form-row">
            <label htmlFor="item">New List</label>
            <input value={newItem}
                onChange={e => setNewItem(e.target.value)} 
                type="text"
                id="item" 
            />
            </div>
            <button className="btn">Add</button>
      </form>
    )
}