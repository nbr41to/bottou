type User = {
  id: string;
  name: string;
  bottou_status: string;
  bottou_points: number;
  createdAt: string;
};

type BottouType = '5minutes' | '25minutes' | '1hour';
type Bottou = {
  id: string;
  userId: string;
  type: BottouType;
  startedAt: FieldValue;
  closed: boolean;
};
