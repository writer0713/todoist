import Fab from '@mui/material/Fab';
import InputForm from './components/InputForm';
import StatusForm from './components/StatusForm';
import Todos from './components/Todos';
import { useTodoStore } from './stores/TodoStore';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

function App() {
  const { todos, resetAll } = useTodoStore((state) => ({
    todos: state.todos.filter((todo) => todo.status === state.currentStatus),
    resetAll: state.resetAll,
  }));
  return (
    <div className="relative flex flex-col items-center justify-center w-full gap-5 p-8">
      {/* title container */}
      <div className="w-full p-5 text-center">
        <h1 className="text-3xl font-bold">Todoist</h1>
      </div>

      {/* input form container */}
      <div className="flex flex-col w-[350px] gap-2 mb-10">
        <InputForm />
      </div>

      {/* status container */}
      <div className="flex flex-col w-[350px] gap-2 mb-10">
        <StatusForm />
      </div>

      {/* todos container */}
      <div className="w-[350px] overflow-y-scroll h-[500px] p-5 ">
        <Todos todos={todos} />
      </div>

      <Fab
        color="primary"
        aria-label="reset"
        sx={{
          position: 'fixed',
          bottom: 40,
          right: 30,
        }}
        onClick={() => resetAll()}
      >
        <RestartAltIcon />
      </Fab>
    </div>
  );
}

export default App;
