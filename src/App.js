import React, { useState } from 'react'
import './App.css'
import TodoListWork from './components/TodoListWork'; 
function App() {

  const [inputList, setInputlist] = useState("");
  const [Items, setItems] = useState([]);

  const eventItem = (event) => {
    setInputlist(event.target.value)
  }

  const listOfItems = () => {
    setItems((OldItems) => {
      return [...OldItems, inputList]
    })
    setInputlist('')
  }

  const deleteItems = (id) => {
    console.log("deleted")
    setItems((OldItems) => {
      return OldItems.filter((arrElem, index) => {
        return index !== id;
      })
    })
  }

  return (
    <>
      <div className='main-container'>
        <div className='center-div'>
          <div className='Heading'>
            <h1> Todo App </h1>
          </div>

          <div className='input-div'>
            <input type='text' placeholder='Enter your  Task' className='input'
              value={inputList} onChange={eventItem} />
            <button className='Add-Btn' onClick={listOfItems}>Add</button>
          </div>
          <div className='list-Item'>
            <ul>
              {Items.map((ItemVal, index) => {
                return (
                  <TodoListWork
                    key={index}
                    id={index}
                    text={ItemVal}
                    onSelect={deleteItems}
                  />

                )
              })}
            </ul>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
