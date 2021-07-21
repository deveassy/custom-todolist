type Todo = {
  id: string;
  title: string;
  createdAt: Date;
  done: boolean;
  flagged: boolean;
};

type Collection = {
  id: string;
  name: string;
  order: number;
  data: Todo[];
};
