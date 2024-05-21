export type MessageType = {
  id: number;
  content: string;
  author: 'DOCTOR' | 'PATIENT';
};

export type ReqPostMessage = {
  content: string;
  author: 'DOCTOR' | 'PATIENT';
};
