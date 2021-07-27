type ITodo = {
  id: string;
  title: string;
  createdAt: string;
  done: boolean;
  flagged: boolean;
};

type ICollection = {
  id: string;
  name: string;
  order: number;
  data: Todo[];
};
