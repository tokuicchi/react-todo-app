import { useEffect, useState } from 'react';

import { Todo } from '../types/todo';

export const useTodoList = () => {
  const [todoList, setTodoList] = useState<Todo[]>(() => {
    const localStorageTodoList = localStorage.getItem('todoList');
    return JSON.parse(localStorageTodoList ?? '[]');
  });

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList]);

  // Todoを完了にする
  const changeCompleted = (id: number) => {
    setTodoList((prevTodoList) => {
      return prevTodoList.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    });
  };

  // Todoを追加する
  const addTodo = (title: string) => {
    setTodoList((prevTodoList) => {
      const newTodo = {
        id: Date.now(),
        title,
        completed: false,
        priority: 1,
      };

      return [newTodo, ...prevTodoList];
    });
  };

  // Todoを削除する
  const deleteTodo = (id: number) => {
    setTodoList((prevTodoList) => {
      return prevTodoList.filter((todo) => {
        return todo.id !== id;
      });
    });
  };

  // 完了済みのTodoを全て削除する
  const deleteAllCompleted = () => {
    setTodoList((prevTodoList) => {
      return prevTodoList.filter((todo) => {
        return !todo.completed;
      });
    });
  };

  // 優先を変更する
  const changePriority = (id: number, newPriority: number) => {
    setTodoList((prevTodoList) => {
      return prevTodoList.map((todo) => {
        if (todo.id === id) {
          return { ...todo, priority: newPriority };
        }
        return todo;
      });
    });
  };

  return {
    todoList,
    changeCompleted,
    addTodo,
    deleteTodo,
    deleteAllCompleted,
    changePriority,
  };
}
