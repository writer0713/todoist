import ITodo from '../types/Todo.type';
import Todo from './Todo';

export default function Todos({ todos }: { todos: ITodo[] }) {
  return (
    <div className="p-5">
      <h2 className="text-center text-2xl font-semibold mb-10">TODOS</h2>
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </div>
  );
}
