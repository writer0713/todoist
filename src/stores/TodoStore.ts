import { create } from 'zustand';
import ITodo, { Status } from '../types/Todo.type';
import { persist } from 'zustand/middleware';

interface TodoStore {
  todos: ITodo[];
  addTodo: (text: string) => void;
  removeTodo: (id: number) => void;

  statuses: string[];
  currentStatus: string;
  addStatus: (status: string) => void;
  modifyTodoStatus: (id: number, status: string) => void;
  setCurrentStatus: (status: string) => void;
}

export const useTodoStore = create<TodoStore>()(
  persist(
    (set) => ({
      todos: [],
      statuses: [Status.TODO, Status.DOING, Status.DONE],
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
      addStatus(status) {
        set((state) => ({ statuses: [...state.statuses, status] }));
      },
      modifyTodoStatus(id, status) {
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
