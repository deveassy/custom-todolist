import { createId } from "../utils/reducers";

/**
 * 할 일 클래스
 */

export class Todo {
  private todo: ITodo;
  constructor(title: string) {
    this.todo = this._createTodo(title);
  }
  private _createTodo = (title: string): ITodo => {
    return {
      id: createId("todo"),
      title,
      done: false,
      flagged: false,
      createdAt: new Date().toString(),
    };
  };
  get getTodo() {
    return this.todo;
  }
}
