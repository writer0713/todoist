import { useTodoStore } from '../stores/TodoStore';
import ITodo from '../types/Todo.type';
import Todo from './Todo';

export default function Todos({ todos }: { todos: ITodo[] }) {
  const { currentStatus } = useTodoStore();
  return (
    <>
      <h2 className="mb-10 text-2xl font-semibold text-center">
        {currentStatus}
      </h2>
      <div>
        {todos.map((todo) => (
          <Todo todo={todo} key={todo.id} />
        ))}
      </div>
    </>
  );
}
