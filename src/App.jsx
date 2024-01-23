import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isDone, setIsDone] = useState(false);

  const titleHandler = (event) => {
    setTitle(event.target.value);
  };

  const contentHandler = (event) => {
    setContent(event.target.value);
  };

  const isDoneHandler = (todo) => {
    todo.isDone ? (todo.isDone = false) : (todo.isDone = true);

    setIsDone(todo.isDone);
  };

  const addTodoHandler = () => {
    if (!title) {
      alert(`제목을 입력해 주세요.`);
    } else if (!content) {
      alert(`내용을 입력해 주세요.`);
    } else {
      const newTodo = {
        id: todos.length + 1,
        title,
        content,
        isDone,
      };

      setTodos([...todos, newTodo]);
      setIsDone(false);
      setTitle("");
      setContent("");
    }
  };

  const removeHandler = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);

    setTodos(newTodos);
  };

  return (
    <div className="App">
      <header>
        <h1>My Todo List</h1>
      </header>
      <main>
        <article>
          <form className="add-form">
            <div className="input-box">
              <p>제목</p>
              <input
                type="text"
                value={title}
                onChange={titleHandler}
                placeholder="제목을 입력해 주세요."
              />
            </div>
            <div className="input-box">
              <p>내용</p>
              <input
                type="text"
                value={content}
                onChange={contentHandler}
                placeholder="내용을 입력해 주세요."
              />
            </div>
            <button type="button" onClick={addTodoHandler}>
              추가하기
            </button>
          </form>
        </article>
        <article className="ongoing-box">
          <h1>ongoing..</h1>
          <ul>
            {todos
              .filter((todo) => {
                return todo.isDone === false;
              })
              .map((todo) => {
                return (
                  <li key={todo.id} className="todo-card">
                    <h2>{todo.title}</h2>
                    <p>{todo.content}</p>
                    <button onClick={() => removeHandler(todo.id)}>삭제</button>
                    <button onClick={() => isDoneHandler(todo)}>
                      {todo.isDone ? "취소" : "완료"}
                    </button>
                  </li>
                );
              })}
          </ul>
        </article>
        <article className="finish-box">
          <h1>finish!</h1>
          <ul>
            {" "}
            {todos
              .filter((todo) => {
                return todo.isDone === true;
              })
              .map((todo) => {
                return (
                  <li key={todo.id} className="todo-card">
                    <h2>{todo.title}</h2>
                    <p>{todo.content}</p>
                    <button onClick={() => isDoneHandler(todo)}>삭제</button>
                    <button onClick={() => isDoneHandler(todo)}>
                      {todo.isDone ? "취소" : "완료"}
                    </button>
                  </li>
                );
              })}
          </ul>
        </article>
      </main>
    </div>
  );
}

export default App;
