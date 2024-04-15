import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { useTodoStore } from '../stores/TodoStore';

export default function StatusSelection() {
  const { statuses, currentStatus, setCurrentStatus } = useTodoStore();

  const handleChange = (event: SelectChangeEvent) => {
    const status = event.target.value as string;
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
        {statuses.map((status) => (
          <MenuItem key={status} value={status}>
            {status}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
