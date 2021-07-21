import React from "react";
import TodoItem from "../../components/TodoItem";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../modules";
import { toggleCompleteTodo } from "../../modules/collections";

type IProps = {
  collection: Collection;
};

function TodoList({ collection }: IProps) {
  const dispatch = useDispatch();
  const idx = useSelector((state: RootState) => state.menus.currentIndex);
  const handleComplete = (id: string) => {
    dispatch(toggleCompleteTodo(idx, id));
  };
  return (
    <div>
      {collection.data.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onClick={handleComplete} />
      ))}
    </div>
  );
}

export default TodoList;
