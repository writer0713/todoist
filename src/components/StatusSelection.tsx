import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { useState } from 'react';
import { Status } from '../types/Todo.type';
import { useTodoStore } from '../stores/TodoStore';

export default function StatusSelection() {
  const { currentStatus, setCurrentStatus } = useTodoStore();

  const handleChange = (event: SelectChangeEvent) => {
    const status = event.target.value as Status;
    setCurrentStatus(status);
    console.log(status);
  };
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Status</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={currentStatus}
        label="Status"
        onChange={handleChange}
      >
        <MenuItem value={Status.TODO}>TODO</MenuItem>
        <MenuItem value={Status.DOING}>DOING</MenuItem>
        <MenuItem value={Status.DONE}>DONE</MenuItem>
      </Select>
    </FormControl>
  );
}
