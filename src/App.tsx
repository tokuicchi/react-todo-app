import { TodoList } from './components/TodoList';
import { AddTodoForm } from './components/AddTodoForm';
import { TodoSummary } from './components/TodoSummary';

import { useTodoList } from './hooks/useTodoList';

function App() {
  const { todoList, changeCompleted, addTodo, deleteTodo, deleteAllCompleted, changePriority } =
    useTodoList();

  return (
    <main className="mx-auto mt-10 max-w-xl space-y-10">
      <h1 className="text-center text-4xl">Todoアプリ</h1>
      <div className="space-y-5">
        <AddTodoForm addTodo={addTodo} />
        <div className="space-y-5 rounded bg-slate-200 p-5">
          <TodoList
            todoList={todoList}
            changeCompleted={changeCompleted}
            deleteTodo={deleteTodo}
            changePriority={changePriority}
          />
          <TodoSummary
            todoList={todoList}
            deleteAllCompleted={deleteAllCompleted}
          />
        </div>
      </div>
    </main>
  );
}

export default App;
