import { ButtonGroup } from '@mui/material';
import ITodo from '../types/Todo.type';
import BottomDrawer from './BottomDrawer';

export default function Todo({ todo }: { todo: ITodo }) {
  return (
    <div className="flex items-center justify-between mb-3">
      <p> {todo.text}</p>
      <ButtonGroup
        color="secondary"
        size="small"
        aria-label="Small button group"
      >
        {/* {statuses.map((status) => (
          <Button key={status} onClick={() => handleSetTodoStatus(status)}>
            {status}
          </Button>
        ))} */}

        <BottomDrawer todo={todo} />
      </ButtonGroup>
    </div>
  );
}
