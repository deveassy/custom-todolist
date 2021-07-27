import React from "react";
import TodoItem from "../../components/TodoItem";
import { useDispatch } from "react-redux";
import { toggleCompleteTodo } from "../../modules/collections";

type IProps = {
  items: ICollection;
};

function TodoList({ items }: IProps) {
  const dispatch = useDispatch();

  /**
   * 할일 완료 처리를 위한 함수
   * @param id todo 아이디
   */
  const handleComplete = (id: string) => {
    dispatch(toggleCompleteTodo(items.id, id));
  };
  return (
    <ul>
      {items.data.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onClick={handleComplete} />
      ))}
    </ul>
  );
}

export default TodoList;
