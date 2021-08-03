import { BaseInstance } from "./base";

/**
 * 할 일 클래스
 */

export class Todo extends BaseInstance<ITodo> {
  constructor(title: string) {
    super(title);
    this.setInstance({
      ...this.base,
      done: false,
      flagged: false,
      createdAt: new Date().toString(),
    });
  }
}
