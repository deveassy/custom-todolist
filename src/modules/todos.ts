export const GET_TODOS = "todos/GET_TODOS" as const;

const getTodos = () => ({
  type: GET_TODOS,
});

const initialState = {
  todos: [
    {
      id: "0",
      title: "할일 1",
      done: false,
    },
    {
      id: "1",
      title: "할일 2",
      done: false,
    },
    {
      id: "2",
      title: "할일 3",
      done: false,
    },
  ] as Todo[],
};

export type Todo = {
  id: string;
  title: string;
  done: boolean;
};
type TodoState = typeof initialState;

type TodoAction = ReturnType<typeof getTodos>;

export default function todoReducer(
  state: TodoState = initialState,
  action: TodoAction
): TodoState {
  switch (action.type) {
    case GET_TODOS:
      return state;
    default:
      // throw new Error("존재하지 않는 타입의 dispatch");
      return state;
  }
}
