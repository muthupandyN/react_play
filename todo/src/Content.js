import React, { useState } from 'react'

import { FaTrashAlt} from "react-icons/fa";



const Content = () => {

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
  return (
   <main >
    {(items.length) ?(
      <ul>
        {items.map((item)=>(
            <li className='item' key={item.id}> 
                <input 
                    onChange={()=>handleCheck(item.id)}
                    type='checkbox'
                    checked={item.checked}
                />
                <label
                style={(item.checked) ?{
                    textDecoration : 'line-through'
                } : null}
                onDoubleClick={()=>handleCheck(item.id)}
                >{item.item}</label>
                <FaTrashAlt
                  onClick={()=>handleDelete(item.id)}
                  role='button'
                  tabIndex="0"
                />
            </li>
        ))}
      </ul>
      ) : (
      <p>List is empty</p>
     )
}
    
   </main>
  )
}

export default Content