import { createId } from "../utils/string";

const ADD_TODO = "collection/ADD_TODO" as const;
const ADD_COLLECTION = "collection/ADD_COLLECTION" as const;
const TOGGLE_COMPLETE_TODO = "collection/TOGGLE_COMPLETE_TODO" as const;

export const addTodo = (targetCollectionId: number, todo: ITodo) => ({
  type: ADD_TODO,
  payload: { targetCollectionId, todo },
});

export const addCollection = (collection: ICollection) => ({
  type: ADD_COLLECTION,
  payload: { collection },
});

export const toggleCompleteTodo = (collectionId: string, todoId: string) => ({
  type: TOGGLE_COMPLETE_TODO,
  payload: { collectionId, todoId },
});

/**
 * collection 초기 상태값
 */
const initialState = [
  {
    id: createId("default"),
    name: "default",
    order: 0,
    data: [] as ITodo[],
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
      const { targetCollectionId, todo } = action.payload;
      newState[targetCollectionId].data.push(todo);
      return newState;

    case ADD_COLLECTION:
      const { collection } = action.payload;
      newState.push(collection);
      return newState;

    case TOGGLE_COMPLETE_TODO:
      const { collectionId, todoId } = action.payload;
      // 컬렉션 ID를 통해 현재 변경해야 하는 컬렉션 정보를 확인
      const idx = newState.findIndex(
        (collection) => collection.id === collectionId
      );
      // done 업데이트
      newState[idx].data = newState[idx].data.map((todo) =>
        todo.id === todoId ? { ...todo, done: !todo.done } : todo
      );
      return newState;
    default:
      return state;
  }
}
