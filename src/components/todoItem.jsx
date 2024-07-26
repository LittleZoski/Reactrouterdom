import React from 'react'

function TodoItem({item,  onDelete, onToggleChecked  }) {

  const handleCheckboxChange = (e) => {
    console.log('Checkbox toggled:', e.target.checked);
    // Call the onToggleChecked prop to update the checked status in parent component
    onToggleChecked();
  };

  return (
    <div className='todoItem' style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
        <h1>{item.task}</h1>
        <button onClick={onDelete}>Delete</button>
        <input
            type="checkbox"
            checked={item.checked}
            onChange={handleCheckboxChange}
        />
    </div>
  )
}

export default TodoItem