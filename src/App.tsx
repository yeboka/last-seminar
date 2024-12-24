import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'

interface Todo {
  userId: number,
  id: number,
  title: string,
  completed?: boolean,
}

export type locale = "ru" | "kz" | "en";
 
enum Color {
  red = '#sdfdfd',
  green = "#dggdfg"
}

function App() {
  const [count, setCount] = useState<number>(0)
  const [todo, setTodo] = useState<Todo[] | null>()

  useEffect(() => {
    let fromBack: locale = "ru"
    console.log(fromBack);
    fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(response => response.json())
    .then((json: Todo[]) => {
      console.log(json);
      setTodo(json);
    })

    let colorFromBack = "#sdfdfd"
    switch (colorFromBack) {
      case Color.red:
        console.log("it is red");
        break;
      case Color.green: 
        console.log("it is green");
        break;
      default:
        console.log("default case. incorrect color");
    }
  }, [])

  function increaseCount (count: number): void {
    setCount(count + 1)
  }

  return (
    <>
      <div>
        <Header name={"Serik"} setName={(name: string) => {
          console.log(name);
        }} />
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => increaseCount(4)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {
        todo && todo.map((item: Todo) => {
          return <p>
          Todo Text: {item?.title}
          <br />
          Is Completed: {item?.completed ? "Yes" : "No"}
        </p>
        })
      }
    </>
  )
}

export default App
