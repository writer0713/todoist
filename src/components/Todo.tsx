import { Button, ButtonGroup } from '@mui/material';
import { useTodoStore } from '../stores/TodoStore';
import ITodo from '../types/Todo.type';

export default function Todo({ todo }: { todo: ITodo }) {
  const { statuses, removeTodo, setTodoStatus } = useTodoStore((state) => ({
    statuses: state.statuses.filter((status) => status !== state.currentStatus),
    removeTodo: state.removeTodo,
    setTodoStatus: state.modifyTodoStatus,
  }));

  const handleSetTodoStatus = (status: string) => {
    setTodoStatus(todo.id, status);
  };

  return (
    <div className="flex justify-between items-center mb-3">
      <p> {todo.text}</p>
      <ButtonGroup
        color="secondary"
        size="small"
        aria-label="Small button group"
      >
        {statuses.map((status) => (
          <Button key={status} onClick={() => handleSetTodoStatus(status)}>
            {status}
          </Button>
        ))}

        <Button key={'DELETE'} onClick={() => removeTodo(todo.id)}>
          DELETE
        </Button>
      </ButtonGroup>
    </div>
  );
}
