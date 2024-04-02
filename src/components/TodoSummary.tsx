import { Todo } from '../types/todo';

type Props = {
  todoList: Todo[];
  deleteAllCompleted: () => void;
};

export const TodoSummary = ({ todoList, deleteAllCompleted }: Props) => {
  return (
    <div className="flex justify-end">
      {todoList.length !== 0 && (
        <button onClick={deleteAllCompleted} className="text-sm text-red-500">
          完了済みTodoを一括削除
        </button>
      )}
    </div>
  );
};
