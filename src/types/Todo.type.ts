export default interface ITodo {
  id: number;
  text: string;
  status: string;
}

export enum Status {
  TODO = 'TODO',
  DOING = 'DOING',
  DONE = 'DONE',
}
