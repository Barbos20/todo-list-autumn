import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.1/",
  withCredentials: true,
  headers: {
    "API-KEY": "5956fca6-d041-4a10-9654-9c72d60d7a12",
  },
});

export type TodolistType = {
  id: string;
  title: string;
  addedDate: string;
  order: number;
};
export type ResponseType<D> = {
  resultCode: number;
  messages: Array<string>;
  fieldsErrors: Array<string>;
  data: D;
};

export const todolistsAPI = {
  getTodolists() {
    return instance.get<Array<TodolistType>>("todo-lists");
  },
  createTodolists() {
    return instance.post<ResponseType<{ item: TodolistType }>>("todo-lists", {
      title: "hello boy",
    });
  },
  deleteTodolists() {
    const todolistId = "e4be0cd0-bcbc-44d2-aafa-55ddf292b737";
    return instance.delete<ResponseType<{}>>(`todo-lists/${todolistId}`);
  },
  updateTodolists() {
    const todolistId = "127b2373-4b1e-4eca-869a-d60bfee8f16e";
    return instance.put<ResponseType<{}>>(`todo-lists/${todolistId}`, {
      title: " hello, what's up?",
    });
  },
};
