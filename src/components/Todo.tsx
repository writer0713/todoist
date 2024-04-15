import { Button, ButtonGroup } from '@mui/material';
import ITodo, { Status } from '../types/Todo.type';
import { useTodoStore } from '../stores/TodoStore';

export default function Todo({ todo }: { todo: ITodo }) {
  const { removeTodo, setTodoStatus } = useTodoStore();

  const handleSetTodoStatus = (status: Status) => {
    setTodoStatus(todo.id, status);
  };

  return (
    <div className="grid grid-cols-2 items-center mb-3">
      <p> {todo.text}</p>
      <ButtonGroup
        color="secondary"
        size="small"
        aria-label="Small button group"
      >
        {todo.status === Status.TODO ? null : (
          <Button
            key={Status.TODO}
            onClick={() => handleSetTodoStatus(Status.TODO)}
          >
            TODO
          </Button>
        )}
        {todo.status === Status.DOING ? null : (
          <Button
            key={Status.DOING}
            onClick={() => handleSetTodoStatus(Status.DOING)}
          >
            DOING
          </Button>
        )}
        {todo.status === Status.DONE ? null : (
          <Button
            key={Status.DONE}
            onClick={() => handleSetTodoStatus(Status.DONE)}
          >
            DONE
          </Button>
        )}

        <Button key={'DELETE'} onClick={() => removeTodo(todo.id)}>
          DELETE
        </Button>
      </ButtonGroup>
    </div>
  );
}
