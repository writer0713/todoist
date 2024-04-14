import InputForm from './components/InputForm';
import Todos from './components/Todos';
import StatusSelection from './components/StatusSelection';
import { useTodoStore } from './stores/TodoStore';

function App() {
  const { todos } = useTodoStore((state) => ({
    todos: state.todos.filter((todo) => todo.status === state.currentStatus),
  }));
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center gap-5">
      <h1 className="text-3xl font-bold">Todoist</h1>

      <div className="flex flex-col gap-20">
        <InputForm />
        <StatusSelection />
        <Todos todos={todos} />
      </div>
    </div>
  );
}

export default App;
