import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';

import { Divider } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';
import { useTodoStore } from '../stores/TodoStore';
import ITodo from '../types/Todo.type';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function BottomDrawer({ todo }: { todo: ITodo }) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const { statuses, removeTodo, modifyTodoStatus } = useTodoStore((state) => ({
    statuses: state.statuses.filter((status) => status !== state.currentStatus),
    removeTodo: state.removeTodo,
    modifyTodoStatus: state.modifyTodoStatus,
  }));

  const handleSetTodoStatus = (status: string) => {
    if (status === 'DELETE') {
      return removeTodo(todo.id);
    }

    modifyTodoStatus(todo.id, status);
  };

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[...statuses].map((status) => (
          <ListItem key={status} disablePadding>
            <ListItemButton onClick={() => handleSetTodoStatus(status)}>
              <ListItemIcon>
                <ArrowForwardIosOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary={status} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      {['DELETE'].map((status) => (
        <ListItem key={status} disablePadding>
          <ListItemButton onClick={() => handleSetTodoStatus(status)}>
            <ListItemIcon>
              <ArrowForwardIosOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={status} />
          </ListItemButton>
        </ListItem>
      ))}
    </Box>
  );

  return (
    <div>
      {(['bottom'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <ListOutlinedIcon />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
