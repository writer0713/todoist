export default interface ITodo {
  id: number;
  text: string;
  status: Status;
}

export enum Status {
  TODO = 'TODO',
  DOING = 'DOING',
  DONE = 'DONE',
}
