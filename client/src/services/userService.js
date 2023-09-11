import { instance } from "./api/axios";

export const getAll = async () => {
  return await instance.get("/users");
};

export const getOne = async (id) => {
  return await instance.get(`/users/${id}`);
};

export const create = async (user) => {
  return await instance.post("/users", user);
};

export const updateById = async (id, user) => {
  return await instance.put(`/users/${id}`, user);
};

export const deleteById = async (id) => {
  return await instance.delete(`/users/${id}`);
};
