import React from 'react'

function TodoListWork(props) {

  return (
    <>
      <div className='main-list-div'>
        <div className='list-div'>

          <li>{props.text}</li>
        </div>
        <div className='icon-div'>
          <span className='deleteIcon'>   <i className="fa-solid fa-trash"
            onClick={() => {
              props.onSelect(props.id)
            }}
          >
          </i>
          </span>
        </div>

      </div>
    </>
  )
}

export default TodoListWork