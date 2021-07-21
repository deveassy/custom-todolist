import { createId } from "../utils/reducers";

const ADD_TODO = "collection/ADD_TODO" as const;
const ADD_COLLECTION = "collection/ADD_COLLECTION" as const;
const TOGGLE_COMPLETE_TODO = "collection/TOGGLE_COMPLETE_TODO" as const;

export const addTodo = (targetCollectionIdx: number, todo: Todo) => ({
  type: ADD_TODO,
  payload: { targetCollectionIdx, todo },
});

export const addCollection = (collection: Collection) => ({
  type: ADD_COLLECTION,
  payload: { collection },
});

export const toggleCompleteTodo = (collectionIdx: number, todoId: string) => ({
  type: TOGGLE_COMPLETE_TODO,
  payload: { collectionIdx, todoId },
});

/**
 * collection 초기 상태값
 */
const initialState = [
  {
    id: createId("default"),
    name: "default",
    order: 0,
    data: [] as Todo[],
  },
];

type CollectionState = typeof initialState;
type CollectionAction = ReturnType<
  typeof addTodo | typeof addCollection | typeof toggleCompleteTodo
>;

/**
 *
 * @param state collection 상태
 * @param action 디스패치 된 액션
 * @returns collection 상태
 */
export default function collectionReducer(
  state: CollectionState = initialState,
  action: CollectionAction
): CollectionState {
  const newState = state.slice();
  switch (action.type) {
    case ADD_TODO:
      const { targetCollectionIdx, todo } = action.payload;
      newState[targetCollectionIdx].data.push(todo);
      return newState;

    case ADD_COLLECTION:
      const { collection } = action.payload;
      newState.push(collection);
      return newState;

    case TOGGLE_COMPLETE_TODO:
      const { collectionIdx, todoId } = action.payload;
      newState[collectionIdx].data = newState[collectionIdx].data.map((todo) =>
        todo.id === todoId ? { ...todo, done: !todo.done } : todo
      );
      return newState;
    default:
      return state;
  }
}
