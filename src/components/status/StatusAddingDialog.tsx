import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material';
import { useState } from 'react';
import { useTodoStore } from '../../stores/TodoStore';

export default function StatusAddingDialog() {
  const [open, setOpen] = useState(false);
  const { addStatus } = useTodoStore();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add NEW STATUS
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth={true}
        PaperProps={{
          component: 'form',
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            const status = formJson.status;

            if (status.length === 0) return;

            addStatus(status);
            handleClose();
          },
        }}
      >
        <DialogTitle>새로운 Status 추가</DialogTitle>
        <DialogContent>
          <DialogContentText>새로운 Status 를 추가하세요.</DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="status"
            name="status"
            label="new status"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>취소</Button>
          <Button type="submit">확인</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
