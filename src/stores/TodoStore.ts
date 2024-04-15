import { create } from 'zustand';
import ITodo, { Status } from '../types/Todo.type';
import { persist } from 'zustand/middleware';

interface TodoStore {
  todos: ITodo[];
  currentStatus: Status;
  addTodo: (text: string) => void;
  removeTodo: (id: number) => void;
  setTodoStatus: (id: number, status: Status) => void;
  setCurrentStatus: (status: Status) => void;
}

export const useTodoStore = create<TodoStore>()(
  persist(
    (set) => ({
      todos: [],
      currentStatus: Status.TODO,
      addTodo: (text: string) =>
        set((state) => ({
          todos: [
            ...state.todos,
            { id: Date.now(), text, status: Status.TODO },
          ],
        })),
      removeTodo: (id) =>
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        })),
      setTodoStatus(id, status) {
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, status } : todo
          ),
        }));
      },
      setCurrentStatus: (status) => set({ currentStatus: status }),
    }),
    {
      name: 'todoist',
    }
  )
);
