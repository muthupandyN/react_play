import React from "react";
import { FaPlus } from "react-icons/fa";
const AddItem = ({newItem, setNewItem, handleSubmit}) => {
  return (
    <form className="addForm" onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="addItem">Add Item</label>
      <input
        autoFocus
        id="addItem" // Add a unique id
        type="text"
        placeholder="Add item"
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button type="submit" aria-label="additem">
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItem;
