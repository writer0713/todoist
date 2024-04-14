import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { useTodoStore } from '../stores/TodoStore';

export default function InputForm() {
  const [value, setValue] = useState<string>('');
  const { addTodo } = useTodoStore();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setValue(newValue);
  };

  const handleAddTodo = () => {
    addTodo(value);
    setValue('');
  };

  return (
    <div className="flex flex-col gap-2">
      <TextField
        id="outlined-basic"
        label="Add Task"
        variant="outlined"
        type="text"
        placeholder="Add Task"
        value={value}
        onChange={onChange}
      />
      <Button variant="contained" onClick={handleAddTodo}>
        ADD
      </Button>
    </div>
  );
}
