import { Trash2 } from 'lucide-react';

import { Todo } from '../types/todo';

type Props = {
  todoList: Todo[];
  changeCompleted: (id: number) => void;
  deleteTodo: (id: number) => void;
  changePriority: (id: number, priority: number) => void;
};

export const TodoList = ({ todoList, changeCompleted, deleteTodo, changePriority }: Props) => {
  return (
    <div className="space-y-3">
      {todoList.map((todo) => (
        <div
          key={todo.id}
          className="flex items-center gap-3 rounded bg-white p-2"
        >
          <label className="flex grow items-center gap-3 hover:cursor-pointer">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="size-5"
                checked={todo.completed}
                onChange={() => changeCompleted(todo.id)}
              />
              <select
                name="priority"
                defaultValue={todo.priority.toString()}
                onChange={(e) => changePriority(todo.id, parseInt(e.target.value))}
              >
                <option value="0">低</option>
                <option value="1">中</option>
                <option value="2">高</option>
              </select>
            </div>
            <span
              className={todo.completed ? 'text-gray-400 line-through' : ''}
            >
              {todo.title}
            </span>
          </label>
          <button
            type="button"
            className="rounded bg-gray-200 p-2 transition-colors hover:bg-gray-300"
            onClick={() => deleteTodo(todo.id)}
          >
            <Trash2 className="size-5 text-gray-500" />
          </button>
        </div>
      ))}
      {todoList.length === 0 && (
        <p className="text-center text-sm">Todoが登録されていません</p>
      )}
    </div>
  );
};
