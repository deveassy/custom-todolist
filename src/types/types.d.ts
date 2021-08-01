interface Base {
  id: string;
  title: string;
  createdAt: string;
}

interface ITodo extends Base {
  done: boolean;
  flagged: boolean;
}

interface ICollection extends Base {
  data: ITodo[];
}