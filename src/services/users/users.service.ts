import { Users } from '@/models/users/user.model';
import httpClient from '@/utils/httpClient';

export const getUsers = async () => {
  const { data } = await httpClient.get('/users');
  return data;
};
export const getUser = async (idUser: number) => {
  const { data } = await httpClient.get(`/users/${idUser}`);
  return data;
};
export const createUser = async (data: Users) => {
  const { data: response } = await httpClient.post('/users', data);
  return response;
};
export const updateUser = async (mergeData: Users) => {
  const { data: response } = await httpClient.put(`/users/${mergeData.id}`, {
    name: mergeData.name,
    email: mergeData.email,
  });
  return response;
};
export const deleteUser = async (id: number) => {
  const { data: response } = await httpClient.delete(`/users/${id}`);
  return response;
};
