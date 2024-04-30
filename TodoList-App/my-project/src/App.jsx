import React from 'react'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'

import { v4 as uuidv4 } from 'uuid';


function App() {

  // const array = [1, 2, 3, 4]
  // console.log([...array, 5])

  const [todo, settodo] = useState("")
  const [message, setmessage] = useState("No List To Show......")
  const [listArray, setListArray] = useState([])

  useEffect(() => {
    getfromTLS()
  }, [])

  useEffect(() => {
    saveTLS()
  }, [listArray]);



  function saveTLS() {
    localStorage.setItem('todolist', JSON.stringify(listArray))
  }

  function getfromTLS() {
    let todoString = localStorage.getItem("todolist")
    if (todoString) {

      let todos = JSON.parse(localStorage.getItem('todolist'))
      setListArray(todos)
      setmessage('Task to be done:')
    }
    else if(todoString === null){
      setmessage('No List to Show.....')

    }
  }



  //HANDLING METHODS
  const handleChange = (e) => {
    settodo(e.target.value)
  }


  //handle the add button
  const handleAdd = () => {
    if (todo === '') {
      alert(`Enter the task to be listed`)
    } else {

      console.log("add button is triggered!!!")
      setListArray([...listArray, { todo, isCompleted: false, id: uuidv4() }])
      settodo('')
      // setmessage('Todo List')  
    }
  }

  //delete the list
  const handleDelete = (e) => {

    console.log('delete is clicked')
    const newArray = listArray.filter(items => {
      if (e.target.value != items.id) {
        return items

      }
    })
    setListArray(newArray)
  }

  //handle the checkbox
  const handleCheckbox = (e) => {
    console.log('checkbox is clicked');
    const updatedListArray = listArray.map((listItem) => {
      if (e.target.value === listItem.id) {

        listItem.isCompleted = !listItem.isCompleted

      }
      return listItem;
    });
    setListArray(updatedListArray);
    console.log(updatedListArray);
  };


  return (
    <div>
      <Navbar />

      <div className="maincontainer max-h-[80vh] min-h-[30vh] overflow-auto w-[90vw] bg-gray-50 rounded-xl m-auto p-4 mt-10 flex flex-col gap-8 ">

        <h1 className='font-bold text-center text-xl text-purple-500'>Todo List</h1>
        <div className="addtodo flex justify-center gap-2">
          <input value={todo} onChange={handleChange} type='text' placeholder='Add a todo' className='border-purple-200 border-2 w-[80%] outline-purple-400 rounded-lg font-bold text-center  '></input>
          <button onClick={handleAdd} onKeyDown={handleAdd} className='rounded-xl bg-purple-500 px-4 py-1 text-white font-semibold'>ADD</button>
        </div>

        <div className="listfotodo flex flex-col gap-4">

          <h1 className='font-bold  text-lg text-purple-500'>{message}</h1>
          {

            listArray.map(listItems => {
              return (
                <ul key={listItems.id} className='flex flex-col gap-2 '>
                  <li className="lists flex gap-1 items-center">
                    <div className=' width font-semibold w-[86%] text-slate-500 flex items-center gap-2'>
                      <input onChange={handleCheckbox} type='checkbox' value={listItems.id}></input>
                      <div className={listItems.isCompleted ? "line-through" : ''}>{listItems.todo}</div>
                    </div>
                    <button value={listItems.id} onClick={handleDelete} className='rounded-xl bg-purple-500 px-4 py-1 h-[2rem] text-white font-semibold text-sm'>DELETE</button>
                  </li>
                </ul>

              )
            })
          }
        </div>

      </div>
    </div>
  )
}

export default App