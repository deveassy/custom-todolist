interface IBase {
  id: string;
  title: string;
  createdAt: string;
}

interface ITodo extends IBase {
  done: boolean;
  flagged: boolean;
}

interface ICollection extends IBase {
  data: Array<ITodo>;
}
