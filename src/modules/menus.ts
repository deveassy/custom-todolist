export const updateMenuIndex = (index: number) => ({
  type: "menus/UPDATE_INDEX",
  payload: index,
});

const initialState = {
  currentIndex: 0,
};

type MenuState = typeof initialState;

type MenuAction = ReturnType<typeof updateMenuIndex>;

export default function todoReducer(
  state: MenuState = initialState,
  action: MenuAction
) {
  switch (action.type) {
    case "menus/UPDATE_INDEX":
      return { currentIndex: action.payload };
    default:
      return state;
  }
}
