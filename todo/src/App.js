import Header from './Header';
import  Footer  from './Footer';
import Content from './Content';
import AddItem from './AddItem';
import React, { useState } from 'react';


function App() {
    const [items, setItems] = useState(
        [
            {
                id:1,
                checked:true,
                item:"practice react"
            },
            {
                id:2,
                checked:true,
                item:"practice python"
            },
            {
                id:3,
                checked:true,
                item:"learn investment"
            }
        ]
    )
    const handleCheck= (id) => {
       const listItem = items.map((item)=>
       item.id === id ? {...item, checked:!item.checked} :item
       )
       setItems(listItem)
       localStorage.setItem("todo_list",JSON.stringify(listItem))
    }

    const handleDelete = (id) =>{
        const listItem = items.filter((item)=>item.id !== id)
        setItems(listItem)
        localStorage.setItem("todo_list",JSON.stringify(listItem))
    }

    const [newItem, setNewItem] = useState('');

    const addItem = (item) =>{
        const id = items.length ? items[items.length -1].id +1 : 1
        const addNewItem = {id, checked:false, item}
        const listItems = [...items, addNewItem]
        setItems(listItems)
        localStorage.setItem("todo_list",JSON.stringify(listItems))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!newItem) return
        console.log(newItem)
        addItem(newItem)
        setNewItem('')
      };
  return (
    <div className="App">
      <Header />
      <AddItem
      newItem = {newItem}
      setNewItem = {setNewItem}
      handleSubmit = {handleSubmit}
      />
      <Content 
      items={items}
      handleCheck = {handleCheck}
      handleDelete = {handleDelete}
      />
      <Footer/>
    </div>
  );
}

export default App;
